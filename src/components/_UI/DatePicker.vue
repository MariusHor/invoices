<script setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import FormField from './FormField.vue'

const date = ref(new Date())
</script>

<template>
  <VueDatePicker v-model="date">
    <template #dp-input="{ value }">
      <FormField :value="value" :name="'date'" :label="'Data'" />
    </template>
    <template #clear-icon=""> </template>
  </VueDatePicker>
</template>

<style scoped lang="sass"></style>
