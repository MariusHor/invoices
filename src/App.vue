<script setup>
import { LogoMain } from '@/components/_UI'
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <LogoMain />
      </div>
    </nav>
  </header>
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

.active
    background: var(--clr-light-grey)

.col-group
    display: grid
    @media screen and (min-width: 840px)
      grid-template-columns: 1fr 1fr
      gap: 1rem
</style>
