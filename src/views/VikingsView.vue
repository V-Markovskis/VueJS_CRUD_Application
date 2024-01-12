<template>
  <main>
    <DisplayAllVikings :vikings="vikings" />
    <CreateNewRecord :get-all-records="getAllRecords" />
  </main>
</template>

<script>
import DisplayAllVikings from "@/components/DisplayAllVikings.vue";
import getAllData from "@/callsToDB/getAllData.ts";
import CreateNewRecord from "@/components/CreateNewRecord.vue";
export default {
  name: "vikings",
  components: { CreateNewRecord, DisplayAllVikings },
  data() {
    return {
      vikings: [],
    };
  },
  mounted() {
    this.getAllRecords();
  },
  methods: {
    async getAllRecords() {
      this.vikings = await getAllData();
    },
  },
};
</script>
