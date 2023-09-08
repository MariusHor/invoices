<script setup>
defineProps({
  headerText: {
    type: String,
    required: true
  },
  hasColGroup: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: 'full'
  }
})
</script>

<template>
  <section class="flex-column" :class="height">
    <h2>{{ headerText }}</h2>
    <div v-if="hasColGroup" class="col-group">
      <slot name="colGroup"></slot>
    </div>
    <slot name="end"></slot>
  </section>
</template>

<style scoped lang="sass">
.full
  height: 100%
.fit
  height: fit-content
</style>
