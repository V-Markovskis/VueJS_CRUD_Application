<template>
  <div v-if="vikingStore.vikings.length > 0">
    <div v-for="(viking, index) in vikingStore.vikings" :key="viking.id">
      <img :src="viking.image" :alt="viking.type" width="200" />
      <RouterLink :to="`/vikings/${viking.id}`"
        ><h3>Type: {{ viking.type }}</h3></RouterLink
      >
      <small>Power: {{ viking.power }}</small>
    </div>
  </div>
  <div v-else>No records about Vikings</div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useVikingsStore } from "@/globalStateStorage/store";

const vikingStore = useVikingsStore();
</script>
