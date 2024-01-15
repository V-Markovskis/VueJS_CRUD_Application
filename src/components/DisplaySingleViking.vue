<template>
  <div>HELLO {{ route.params.id }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
</script>
