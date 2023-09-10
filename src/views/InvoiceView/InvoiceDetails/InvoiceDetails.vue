<script setup>
defineProps({
  status: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="invoice__details flex-column">
    <div class="invoice__details-group flex-row">
      <div>
        <h3>Status</h3>
        <span>{{ status }}</span>
      </div>
      <div>
        <h3>Data</h3>
        <span>{{ date }}</span>
      </div>
    </div>
    <div>
      <h3>Descriere</h3>
      <p>{{ description ? description : 'Necompletat' }}</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
.invoice__details
    gap: 2rem

    &-group
        justify-content: space-between
</style>
