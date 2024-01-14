<template>
  <div v-if="vikings">
    <div v-for="(viking, index) in vikings" :key="viking.id">
      <img :src="viking.image" :alt="viking.type" width="200" />
      <h3>Name: {{ viking.type }}</h3>
      <small>Power: {{ viking.power }}</small>
      <p>Description: {{ viking.description }}</p>
    </div>
  </div>
  <div v-else>No records about vikings</div>
</template>

<script lang="ts" setup>
import type { IViking } from "@/models/viking.ts";
import type { PropType } from "vue";

defineProps({
  //https://stackoverflow.com/questions/72196164/vue-js-3-declare-a-props-with-array-of-class
  vikings: Array as PropType<Array<IViking>>,
});
</script>
