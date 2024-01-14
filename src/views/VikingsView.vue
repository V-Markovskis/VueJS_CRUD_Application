<template>
  <main>
    <DisplayAllVikings :vikings="vikings" />
    <CreateNewRecord />
    <!--    <CreateNewRecord :get-all-records="getAllRecords" />-->
  </main>
</template>

<script lang="ts">
import CreateNewRecord from "@/components/CreateNewRecord.vue";
import { onMounted, provide, ref } from "vue";
import DisplayAllVikings from "@/components/DisplayAllVikings.vue";
import type { Ref } from "vue";
import type { IViking } from "@/models/viking.ts";
import getAllData from "@/callsToDB/getAllData";
export default {
  name: "vikings",
  components: { CreateNewRecord, DisplayAllVikings },
  setup() {
    const vikings: Ref<IViking[]> = ref([]);

    const getAllRecords = async () => {
      vikings.value = await getAllData();
    };

    onMounted(() => {
      getAllRecords();
    });

    provide("getAllRecords", getAllRecords);

    return {
      vikings,
    };
  },
};
</script>
