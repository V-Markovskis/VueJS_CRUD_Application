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
import { inject, ref } from "vue";
import { postNewRecord } from "@/callsToDB/postData";
import type { IViking } from "@/models/viking";

//https://stackoverflow.com/questions/46208610/call-parent-method-with-component#:~:text=It's%20possible%20to%20call%20a,that%20exist%20in%20the%20parent.
const dataRequests = inject("dataRequests") as {
  getAllRecords: () => Promise<IViking[]>;
};

const { getAllRecords } = dataRequests;

const model = ref({
  viking: {
    image: "",
    type: "",
    power: 1,
    description: "",
  },
});
const saveNewRecord = async () => {
  await postNewRecord(model.value.viking);
  await getAllRecords();

  model.value.viking = {
    image: "",
    type: "",
    power: 1,
    description: "",
  };
};
</script>
