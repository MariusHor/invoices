<script setup>
import { ButtonNavigateBack } from '@/components'

defineProps({
  headerText: String,
  hasNavigateBackBtn: {
    type: Boolean,
    default: true
  },
  shouldDisplayModal: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="section-header flex-column">
    <h1>{{ headerText }}</h1>
    <ButtonNavigateBack v-if="hasNavigateBackBtn" :shouldDisplayModal="shouldDisplayModal" />
  </div>
  <div class="section-content flex-column">
    <slot name="content"></slot>
  </div>
</template>

<style scoped lang="sass">
.section-header
  margin-bottom: 4rem
  gap: 0.5rem

.section-content
  gap: 1.575rem
  height: 100%
  flex: 1
</style>
