<template>
  <div v-if="vikings.length > 0">
    <div v-for="(viking, index) in vikings" :key="viking.id">
      <img :src="viking.image" :alt="viking.name" width="200" />
      <h3>Name: {{ viking.type }}</h3>
      <small>Power: {{ viking.power }}</small>
      <p>Description: {{ viking.description }}</p>
    </div>
  </div>
  <div v-else>No records about vikings</div>
</template>

<script>
export default {
  name: "DisplayAllVikings",
  props: {
    vikings: Array,
  },
};
</script>
