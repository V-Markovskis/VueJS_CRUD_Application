<template>
  <main>
    <DisplayAllVikings :vikings="vikings" />
  </main>
</template>

<script>
import DisplayAllVikings from "@/components/DisplayAllVikings.vue";
import getAllData from "@/callsToDB/getAllData.ts";

export default {
  name: "vikings",
  components: { DisplayAllVikings },
  data() {
    return {
      vikings: [],
    };
  },
  async mounted() {
    this.vikings = await getAllData();
    console.log("vikings", this.vikings);
  },
};
</script>
