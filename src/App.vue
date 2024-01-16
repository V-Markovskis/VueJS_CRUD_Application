<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="container wrapper">
      <nav>
        <RouterLink
          to="/"
          class="link-info link-offset-2 link-opacity-50-hover link-underline-opacity-0"
          >Home</RouterLink
        >
        &nbsp;
        <RouterLink
          to="/about"
          class="link-info link-offset-2 link-opacity-50-hover link-underline-opacity-0"
          >About</RouterLink
        >
        &nbsp;
        <RouterLink
          to="/vikings"
          class="link-info link-offset-2 link-opacity-50-hover link-underline-opacity-0"
          >Vikings</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="css" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  font-size: 30px;
}
</style>
