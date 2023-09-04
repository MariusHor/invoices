<script setup>
import { ref } from 'vue'
import FormInvoiceItem from './FormInvoiceItem/FormInvoiceItem.vue'
import ButtonAdd from '@/components/ButtonAdd.vue'

const items = ref(Array.from({ length: 1 }))
</script>

<template>
  <ul>
    <FormInvoiceItem
      :items="items"
      v-for="(item, index) in items"
      :key="index"
      @removeItem="items.pop()"
    />
  </ul>
  <ButtonAdd
    :isLink="false"
    @handleClick="() => items.push(null)"
    :variant="'light'"
    :disabled="items.length === 3"
  />
</template>
