<script setup>
defineProps({
  currency: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  },
  align: {
    type: String,
    default: 'center'
  }
})
</script>

<template>
  <div class="invoice__total">
    <span class="invoice__total-title" :class="align">Total:</span>
    <span class="invoice__total-value" :class="align">{{ currency }} {{ total }}</span>
  </div>
</template>

<style scoped lang="sass">
.center
    text-align: center

.end
    text-align: end
.invoice__total
    display: grid
    grid-template-columns: repeat(5, 1fr)

    &-title
        grid-column-start: 4

    span
        font-weight: bold
</style>
