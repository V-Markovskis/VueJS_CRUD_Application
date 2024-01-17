<template>
  <div v-if="vikingStore.vikings.length > 0" class="vikings-container">
    <div
      v-for="(viking, index) in vikingStore.vikings"
      :key="viking.id"
      class="viking-form-container"
    >
      <div class="inner-container">
        <img :src="viking.image" :alt="viking.type" width="200" class="image" />
      </div>
      <RouterLink
        :to="`/vikings/${viking.id}`"
        class="link-warning link-offset-2 link-opacity-50-hover link-underline-opacity-0"
        ><h3 class="viking-type">Type: {{ viking.type }}</h3></RouterLink
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

<style lang="css" scoped>
.vikings-container {
  margin-top: 40px;
  display: flex;
  gap: 20px;
}

.viking-form-container {
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  max-width: 250px;
  background-color: #b7b7ef;
  margin-bottom: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  border: 1px solid black;
  border-radius: 8px;
  height: 200px;
  object-fit: cover;
}

.viking-type {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
