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

<script>
import { postNewRecord } from "@/callsToDB/postData.ts";

export default {
  name: "NewVikingRecord",
  props: {
    getAllRecords: Function,
  },
  data() {
    return {
      model: {
        viking: {
          image: "",
          type: "",
          power: 1,
          description: "",
        },
      },
    };
  },
  methods: {
    async saveNewRecord() {
      await postNewRecord(this.model.viking);
      console.log("this.getAllRecords()", this.getAllRecords());
      await this.getAllRecords();

      this.model.viking = {
        image: "",
        type: "",
        power: 1,
        description: "",
      };
    },
  },
};
</script>
