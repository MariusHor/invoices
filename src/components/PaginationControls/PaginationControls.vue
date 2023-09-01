<script setup>
import { ref } from 'vue'
import PaginationButton from './PaginationButton.vue'

const currentPage = ref(0)

function increasePage() {
  currentPage.value += 1
}

function decreasePage() {
  currentPage.value = currentPage.value === 0 ? currentPage.value : currentPage.value - 1
}
</script>

<template>
  <div class="pagination">
    <PaginationButton :imgClass="'icon-prev'" @click="decreasePage" />
    <span class="pagination__current">{{ currentPage }}</span>
    <PaginationButton :imgClass="'icon-next'" @click="increasePage" />
  </div>
</template>

<style lang="sass">
.pagination
    display: flex
    align-items: center
    gap: 1rem

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
