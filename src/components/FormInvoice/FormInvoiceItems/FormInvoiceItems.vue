<script setup>
import { FieldArray } from 'vee-validate'
import FormInvoiceItem from './FormInvoiceItem/FormInvoiceItem.vue'
import ButtonAdd from '@/components/ButtonAdd.vue'
</script>

<template>
  <FieldArray name="items" v-slot="{ fields, push, remove }">
    <fieldset class="InputGroup" v-for="(field, index) in fields" :key="field.key">
      <FormInvoiceItem
        :key="index"
        :id="index"
        :name="`items[${index}]`"
        :fields="fields"
        @removeItem="
          () => {
            console.log(field.value)
            remove(index)
          }
        "
      />
    </fieldset>
    <ButtonAdd
      :isLink="false"
      @handleClick="() => push({ description: '', price: '', quantity: 0 })"
      :variant="'light'"
      :disabled="fields.length === 3"
    />
  </FieldArray>
</template>
