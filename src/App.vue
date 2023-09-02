<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="flex-column">
    <router-view></router-view>
  </main>
</template>

<style lang="sass">
.flex-column
  display: flex
  flex-direction: column
</style>
