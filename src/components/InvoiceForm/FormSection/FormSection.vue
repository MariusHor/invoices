<script setup>
defineProps({
  headerText: {
    type: String,
    required: true
  },
  hasGridGroup: {
    type: Boolean,
    required: true,
    default: true
  }
})
</script>

<template>
  <div>
    <h2>{{ headerText }}</h2>
    <div v-if="hasGridGroup" class="grid-group">
      <slot name="gridGroup"></slot>
    </div>
    <slot></slot>
  </div>
</template>
