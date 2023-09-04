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

.max-w-10
  max-width: 10rem

.max-w-9
  max-width: 9rem

.active
    background: var(--clr-light-grey)
</style>
