<template>
  <main>
    <DisplayAllVikings :vikings="vikings" />
    <CreateNewRecord />
  </main>
</template>

<script lang="ts" setup>
import CreateNewRecord from "@/components/CreateNewRecord.vue";
import { onMounted, provide, ref } from "vue";
import DisplayAllVikings from "@/components/DisplayAllVikings.vue";
import type { Ref } from "vue";
import type { IViking } from "@/models/viking.ts";
import getAllData from "@/callsToDB/getAllData";
import { getSingleData } from "@/callsToDB/getSingleData";

const vikings: Ref<IViking[]> = ref([]);

const getAllRecords = async () => {
  vikings.value = await getAllData();
};

const getSingleRecord = async (id: number) => {
  await getSingleData(id);
};

onMounted(() => {
  getAllRecords();
});

provide("dataRequests", { getAllRecords, getSingleRecord });
</script>
