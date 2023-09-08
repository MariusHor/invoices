<script setup>
import { ITEM_TABLE_HEADINGS } from '@/helpers'

defineProps({
  items: {
    type: Array,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th scope="col" v-for="heading in ITEM_TABLE_HEADINGS" :key="heading" width="150">
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index" height="40px">
        <td width="150" v-for="(key, index) in Object.keys(item)" :key="index">
          <span v-if="key === 'price' || key === 'total'"
            >{{ currency }} {{ item[key].toFixed(2) }}</span
          >
          <span v-else>{{ item[key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="sass">
table
    text-align: center

    th
        font-weight: bold
</style>
