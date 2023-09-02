<script setup>
import { IconButton } from '@/components'

defineProps({
  headerText: String,
  hasNavigateBackBtn: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="section-header">
    <h1>{{ headerText }}</h1>
    <IconButton v-if="hasNavigateBackBtn" @handleClick="$router.back()" :text="'Inapoi'" />
  </div>
  <div class="section-content">
    <slot name="content"></slot>
  </div>
</template>

<style scoped lang="sass">
.section-header
  margin-bottom: 4rem
  display: flex
  flex-direction: column
  gap: 0.5rem

.section-content
  display: flex
  flex-direction: column
  gap: 1.575rem
  height: 100%
</style>
