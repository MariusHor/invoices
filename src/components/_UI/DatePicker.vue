<script setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watchEffect } from 'vue'
import { useField } from 'vee-validate'
import VueDatePicker from '@vuepic/vue-datepicker'
import { Icon } from '@iconify/vue'
import FormField from './FormField.vue'

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
          <Icon icon="mdi:calendar" width="24" class="icon" />
        </template>
      </FormField>
    </template>
    <template #clear-icon=""> </template>
  </VueDatePicker>
</template>

<style scoped lang="sass">
.field__input
  position: relative
  cursor: pointer
  caret-color: transparent

.icon
  position: absolute
  right: 0.875rem
  top: 50%
  transform: translate(0, 10%)
  pointer-events: none
</style>
