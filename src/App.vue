<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        &nbsp;
        <RouterLink to="/about">About</RouterLink>
        &nbsp;
        <RouterLink to="/vikings">Vikings</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
