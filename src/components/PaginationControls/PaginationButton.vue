<script setup>
defineProps({
  imgClass: String
})
</script>

<template>
  <button class="pagination__control">
    <img src="/select-arrow.svg" width="12" height="6" alt="" :class="imgClass" />
  </button>
</template>
