<script setup></script>

<template>
  <div class="logo">
    <router-link to="/"> Logo </router-link>
  </div>
</template>

<style scoped lang="sass">
.logo
    background-color: var(--clr-black)
    width: fit-content
    border-radius: 0.25rem

    a
        display: block
        padding: 0.5rem 1.5rem
        color: var(--clr-white)
        @media screen and (min-width: 640px)
            padding: 0.625rem 1.75rem
        @media screen and (min-width: 768px)
            padding: 0.75rem 2rem
</style>
