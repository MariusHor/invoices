<script setup>
import { LogoMain } from '@/components/_UI'
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <LogoMain />
    </div>
  </nav>
  <main class="flex-column">
    <router-view></router-view>
  </main>
</template>

<style lang="sass">
.navbar
    border-bottom: solid 1px var(--clr-light-grey)

.flex-column
  display: flex
  flex-direction: column

.flex-row
  display: flex
  flex-direction: row

.max-w-10
  max-width: 10rem

.max-w-9
  max-width: 9rem

.active
    background: var(--clr-light-grey)

.col-group
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1rem
</style>
