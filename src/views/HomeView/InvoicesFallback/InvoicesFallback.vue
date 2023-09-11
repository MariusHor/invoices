<script setup>
import { ButtonAdd } from '@/components'
</script>

<template>
  <div class="fallback flex-column">
    <h2>Momentan nu exista facturi salvate</h2>
    <ButtonAdd :text="'Adauga'" :variant="'dark-md'" :hideTextOnSmRes="false" />
  </div>
</template>

<style scoped lang="sass">
.fallback
  margin: 0 auto
  justify-content: center
  align-items: center
  gap: 1rem
  flex: 1
  text-align: center
</style>
