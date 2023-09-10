<script setup>
import { FieldArray } from 'vee-validate'
import FormItem from './FormItem/FormItem.vue'
import ButtonAdd from '@/components/ButtonAdd.vue'
import { INVOICE_UNITS_OPTIONS } from '@/helpers'
import { InvoiceTotal } from '../..'
</script>

<template>
  <div class="items flex-column">
    <FieldArray name="items" v-slot="{ fields, push, remove }">
      <div class="items__wrapper flex-column">
        <div class="items-list">
          <fieldset v-for="(field, index) in fields" :key="field.key">
            <FormItem
              :key="index"
              :id="index"
              :name="`items[${index}]`"
              :fields="fields"
              @removeItem="remove(index)"
            />
          </fieldset>
        </div>

        <ButtonAdd
          :isLink="false"
          @handleClick="
            () => push({ title: '', price: '', quantity: 1, unit: INVOICE_UNITS_OPTIONS[0] })
          "
          :variant="'light-md'"
          :disabled="fields.length === 3"
        />
      </div>
      <InvoiceTotal
        :align="'end'"
        :currency="$store.state.invoices.formCurrency"
        :total="
          fields.reduce((acc, curr) => acc + curr.value.price * curr.value.quantity, 0).toFixed(2)
        "
      />
    </FieldArray>
  </div>
</template>

<style scoped lang="sass">
.items-list
  display: flex
  flex-direction: column
  gap: 1rem
  @media screen and (min-width: 840px)
    max-height: 154px
    overflow-y: scroll
.items
  gap: 1rem
  height: 100%
  justify-content: space-between

  &__wrapper
    align-items: center
    gap: 1rem

  fieldset
    display: flex
    flex-direction: column
    gap: 1rem
    width: 100%
    border: solid 1px var(--clr-light-grey)
    border-radius: 5px
    padding: 1rem

p
  display: flex
  justify-content: end

  span
    display: block
    min-width: 80px
    text-align: center
    margin-left: 5px
</style>
