<script setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watchEffect } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import FormField from './FormField.vue'
import { useField } from 'vee-validate'

const date = ref(new Date())

const { handleChange } = useField('date')

watchEffect(() => {
  handleChange(date.value)
})
</script>

<template>
  <VueDatePicker v-model="date" :enable-time-picker="false">
    <template #dp-input="{ value }">
      <FormField :name="'date'" :label="'Data'" id="datePicker" :handles-date="true">
        <template #dateInput>
          <input class="field__input" :name="'date'" id="datePicker" :value="value" />
        </template>
      </FormField>
    </template>
    <template #clear-icon=""> </template>
  </VueDatePicker>
</template>

<style scoped lang="sass"></style>
