<template>
  <div v-for="(viking, index) in vikings" :key="viking.id">
    <img :src="viking.image" :alt="viking.name" />
    <h3>Name: {{ viking.name }}</h3>
    <small>Power: {{ viking.power }}</small>
    <p>Description: {{ viking.description }}</p>
  </div>
</template>

<script>
export default {
  name: "DisplayAllVikings",
  props: {
    vikings: Array,
  },
};
</script>
