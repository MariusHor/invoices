<script setup>
import PaginationButton from './PaginationButton.vue'

defineProps({
  currentPage: Number,
  hasNextPage: Boolean
})

const emit = defineEmits(['increasePageCount', 'decreasePageCount'])
</script>

<template>
  <div class="pagination">
    <PaginationButton :imgClass="'icon-prev'" @click="emit('decreasePageCount')" />
    <span class="pagination__current">{{ currentPage }}</span>
    <PaginationButton
      :imgClass="'icon-next'"
      @click="emit('increasePageCount')"
      :disabled="!hasNextPage"
    />
  </div>
</template>

<style lang="sass">
.pagination
    display: flex
    align-items: center
    gap: 1rem
    width: fit-content
    margin: 0 auto
    margin-top: 3rem

    &__control, &__current
        display: grid
        place-items: center
        border-radius: 100%
        height: 2rem
        width: 2rem

    &__control
        border: solid 1px var(--clr-light-grey)

    &__current
        background: var(--clr-black)
        color: var(--clr-white)
        font-weight: bold

.icon-prev
    transform: rotate(90deg)
.icon-next
    transform: rotate(-90deg)
</style>
