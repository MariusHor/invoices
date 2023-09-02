<script setup>
defineProps({
  headerText: String
})
</script>

<template>
  <h1 class="section-header">{{ headerText }}</h1>
  <div class="section-content">
    <slot name="content"></slot>
  </div>
</template>

<style scoped lang="sass">
.section-header
  margin-bottom: 4rem

.section-content
  display: flex
  flex-direction: column
  gap: 1.575rem
  height: 100%
</style>
