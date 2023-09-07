<script setup>
defineProps({
  headerText: {
    type: String,
    required: true
  },
  hasColGroup: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="form__section flex-column">
    <h2>{{ headerText }}</h2>
    <div v-if="hasColGroup" class="col-group">
      <slot name="colGroup"></slot>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<style scoped lang="sass">
.form__section
  height: 100%
</style>
