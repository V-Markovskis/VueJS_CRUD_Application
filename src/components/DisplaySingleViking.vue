<template>
  <div v-if="!vikingStore.editMode" class="single-viking-container">
    <div v-if="viking">
      <img :src="viking.image" :alt="viking.type" width="200" class="image" />
      <h3 class="viking-type">Type: {{ viking.type }}</h3>
      <small>Power: {{ viking.power }}</small>
      <p class="description">Description: {{ viking.description }}</p>
      <div class="button-container">
        <button @click="deleteViking(viking.id!)" class="btn btn-danger">
          Delete
        </button>
        <button @click="editViking()" class="btn btn-warning">Edit</button>
      </div>
    </div>
    <div v-else>No records about Vikings</div>
  </div>
  <div v-if="vikingStore.editMode">
    <CreateNewRecord
      :vikingToEdit="viking"
      :id="id"
      @update:viking="handleVikingUpdate"
    ></CreateNewRecord>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import type { IViking } from "@/models/viking";
import { getSingleData } from "@/callsToDB/getSingleData";
import { useVikingsStore } from "@/globalStateStorage/store";
import { deleteData } from "@/callsToDB/deleteData";
import CreateNewRecord from "@/components/CreateNewRecord.vue";

const vikingStore = useVikingsStore();

const route = useRoute();
const router = useRouter();
const { id } = route.params as { id: string };

let viking = ref<IViking>({
  image: "",
  type: "",
  power: 1,
  description: "",
});

const deleteViking = async (id: string) => {
  await deleteData(id);
  const index = vikingStore.vikings.findIndex(
    (vikingToSearch) => vikingToSearch.id === id,
  );
  vikingStore.$patch((state) => {
    state.vikings.splice(index, 1);
    router.push("/vikings");
  });
};

const editViking = () => {
  vikingStore.toggleEditMode();
};

onMounted(async () => {
  viking.value = (await getSingleData(id)) as IViking;
});

const handleVikingUpdate = (updatedViking: IViking) => {
  viking.value = updatedViking;
};
</script>

<style lang="css" scoped>
.single-viking-container {
  margin-top: 40px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 300px;
  padding: 20px;
  background-color: #646e45;
}

.button-container {
  display: flex;
  gap: 15px;
}

.image {
  border: 1px solid black;
  border-radius: 8px;
}

.description,
.viking-type {
  word-wrap: break-word;
}
</style>
