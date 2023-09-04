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
  <div>
    <h2>{{ headerText }}</h2>
    <div v-if="hasColGroup" class="col-group">
      <slot name="colGroup"></slot>
    </div>
    <slot name="end"></slot>
  </div>
</template>
