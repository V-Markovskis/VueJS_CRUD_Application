<template>
  <div v-if="vikings!.length > 0">
    <div v-for="(viking, index) in vikings" :key="viking.id">
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
import type { IViking } from "@/models/viking.ts";
import type { PropType } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  //https://stackoverflow.com/questions/72196164/vue-js-3-declare-a-props-with-array-of-class
  vikings: Array as PropType<Array<IViking>>,
});
</script>
