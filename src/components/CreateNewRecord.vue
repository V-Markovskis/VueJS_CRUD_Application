<template>
  <form class="create-viking-container" @submit.prevent="saveNewRecord">
    <h3>Create your Viking Type</h3>
    <label for="image">Image URL:</label>
    <br />
    <input
      type="text"
      id="image"
      placeholder="as you see this Viking"
      v-model="model.viking.image"
      required
    />
    <br />
    <br />
    <label for="type">Viking Type:</label>
    <br />
    <input
      type="text"
      id="type"
      placeholder="Create name/type"
      v-model="model.viking.type"
      required
    />
    <br />
    <br />
    <label for="power">Power:</label>
    <br />
    <input
      type="number"
      id="power"
      placeholder="1-100"
      v-model="model.viking.power"
      required
    />
    <br />
    <br />
    <label for="description">Description:</label>
    <br />
    <input
      type="text"
      id="description"
      placeholder="Strong as the mountain..."
      v-model="model.viking.description"
      required
    />
    <br />
    <br />
    <div class="button-container">
      <button type="submit" class="btn btn-success">Save</button>
      <div v-if="vikingStore.editMode">
        <button @click="vikingStore.toggleEditMode()" class="btn btn-warning">
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { postNewRecord } from "@/callsToDB/postData";
import type { IViking } from "@/models/viking";
import { useVikingsStore } from "@/globalStateStorage/store";
import type { PropType, Ref } from "vue";
import { editData } from "@/callsToDB/editData";
import getAllData from "@/callsToDB/getAllData";

const props = defineProps({
  //https://stackoverflow.com/questions/72196164/vue-js-3-declare-a-props-with-array-of-class
  vikingToEdit: Object as PropType<IViking>,
  getAllRecords: Function,
  id: String as PropType<string>,
});

let localViking = ref({ ...props.vikingToEdit });
const emit = defineEmits(["update:viking"]);

const updateViking = () => {
  emit("update:viking", localViking.value);
};

const vikingStore = useVikingsStore();

let model: Ref<{
  viking: {
    id?: string;
    image: string;
    type: string;
    power: number;
    description: string;
  };
}>;
if (vikingStore.editMode) {
  if (props.vikingToEdit) {
    model = ref({
      viking: {
        image: props.vikingToEdit.image,
        type: props.vikingToEdit.type,
        power: props.vikingToEdit.power,
        description: props.vikingToEdit.description,
      },
    });
  }
} else {
  model = ref({
    viking: {
      image: "",
      type: "",
      power: 1,
      description: "",
    },
  });
}
const saveNewRecord = async () => {
  if (vikingStore.editMode) {
    await editData(model.value.viking, props.id!);
    localViking.value = model.value.viking;
    updateViking();
    vikingStore.toggleEditMode();
  } else {
    await postNewRecord(model.value.viking);
    if (props.getAllRecords) {
      await props.getAllRecords();
    }

    model.value.viking = {
      image: "",
      type: "",
      power: 1,
      description: "",
    };
  }
};
</script>

<style lang="css" scoped>
.create-viking-container {
  border: 1px solid black;
  border-radius: 10px;
  max-width: 300px;
  padding: 20px;
  background-color: #50509a;
}

.button-container {
  display: flex;
  gap: 15px;
}
</style>
