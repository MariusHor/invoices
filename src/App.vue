<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style scoped lang="sass">
main
  padding: 3rem
  max-width: 55rem
  height: 100%
  display: flex
  flex-direction: column
</style>
