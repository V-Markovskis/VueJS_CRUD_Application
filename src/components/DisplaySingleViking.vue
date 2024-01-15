<template>
  <div v-if="viking">
    <img :src="viking.image" :alt="viking.type" width="200" />
    <h3>Type: {{ viking.type }}</h3>
    <small>Power: {{ viking.power }}</small>
    <p>Description: {{ viking.description }}</p>
    <button @click="deleteViking(viking.id!)">Delete</button>
  </div>
  <div v-else>No records about Vikings</div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import type { IViking } from "@/models/viking";
import { getSingleData } from "@/callsToDB/getSingleData";
import { useVikingsStore } from "@/globalStateStorage/store";
import { deleteData } from "@/callsToDB/deleteData";

const vikingStore = useVikingsStore();

const route = useRoute();
const router = useRouter();
const { id } = route.params as { id: string };

const viking = ref<IViking>({
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

onMounted(async () => {
  viking.value = (await getSingleData(id)) as IViking;
});
</script>
