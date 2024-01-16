<template>
  <div>
    <h3>Create your Viking Type</h3>
    <label for="image">Image URL:</label>
    <br />
    <input
      type="text"
      id="image"
      placeholder="as you see this Viking"
      v-model="model.viking.image"
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
    />
    <br />
    <br />
    <label for="power">Power:</label>
    <br />
    <input
      type="text"
      id="power"
      placeholder="1-100"
      v-model="model.viking.power"
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
    />
    <br />
    <br />
    <button @click="saveNewRecord">Save</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { postNewRecord } from "@/callsToDB/postData";
import type { IViking } from "@/models/viking";
import { useVikingsStore } from "@/globalStateStorage/store";
import type { PropType, Ref } from "vue";
import { editData } from "@/callsToDB/editData";

const props = defineProps({
  //https://stackoverflow.com/questions/72196164/vue-js-3-declare-a-props-with-array-of-class
  vikingToEdit: Object as PropType<IViking>,
  getAllRecords: Function,
  id: String as PropType<string>,
});

//https://stackoverflow.com/questions/46208610/call-parent-method-with-component#:~:text=It's%20possible%20to%20call%20a,that%20exist%20in%20the%20parent.
// const dataRequests = inject("dataRequests") as {
//   getAllRecords: () => Promise<IViking[]>;
// };
//
// const { getAllRecords } = dataRequests;

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
    if (props.getAllRecords) {
      await props.getAllRecords();
    }
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
