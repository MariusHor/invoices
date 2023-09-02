<script setup>
import { IconButton } from './UI'
</script>

<template>
  <IconButton @handleClick="$router.back()" :text="'Inapoi'" />
</template>
