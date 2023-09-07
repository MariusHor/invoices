<script setup>
import { FieldArray } from 'vee-validate'
import FormItem from './FormItem/FormItem.vue'
import ButtonAdd from '@/components/ButtonAdd.vue'
import { INVOICE_UNITS_OPTIONS } from '@/helpers'
</script>

<template>
  <div class="items flex-column">
    <FieldArray name="items" v-slot="{ fields, push, remove }">
      <div class="items__wrapper flex-column">
        <fieldset v-for="(field, index) in fields" :key="field.key">
          <FormItem
            :key="index"
            :id="index"
            :name="`items[${index}]`"
            :fields="fields"
            @removeItem="remove(index)"
          />
        </fieldset>
        <ButtonAdd
          :isLink="false"
          @handleClick="
            () => push({ title: '', price: '', quantity: 1, unit: INVOICE_UNITS_OPTIONS[0] })
          "
          :variant="'light'"
          :disabled="fields.length === 3"
        />
      </div>
      <p>
        Total:
        <span
          >{{ $store.state.invoices.activeCurrency }}
          {{
            fields.reduce((acc, curr) => {
              return acc + curr.value.price * curr.value.quantity
            }, 0)
          }}</span
        >
      </p>
    </FieldArray>
  </div>
</template>

<style scoped lang="sass">
.items
  gap: 0.5rem
  height: 100%
  justify-content: space-between

  &__wrapper
    align-items: center
    gap: 1rem

  fieldset
    display: flex
    gap: 1rem

p
  display: flex
  justify-content: end

  span
    display: block
    min-width: 80px
    text-align: center
    margin-left: 5px
</style>
