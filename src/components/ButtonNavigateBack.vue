<script setup>
import { Icon } from '@iconify/vue'
import { IconButton } from './UI'
</script>

<template>
  <IconButton @handleClick="$router.back()" :text="'Inapoi'">
    <template #start>
      <Icon icon="formkit:arrowleft" width="24" />
    </template>
  </IconButton>
</template>
