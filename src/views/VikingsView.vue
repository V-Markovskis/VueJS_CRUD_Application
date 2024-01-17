<template>
  <main>
    <DisplayAllVikings />
    <CreateNewRecord :getAllRecords="getAllRecords" />
  </main>
</template>

<script lang="ts" setup>
import CreateNewRecord from "@/components/CreateNewRecord.vue";
import { onMounted, provide } from "vue";
import DisplayAllVikings from "@/components/DisplayAllVikings.vue";
import getAllData from "@/callsToDB/getAllData";
import { useVikingsStore } from "@/globalStateStorage/store";

const vikingStore = useVikingsStore();

const getAllRecords = async () => {
  vikingStore.vikings = await getAllData();
};

onMounted(() => {
  getAllRecords();
});
</script>
