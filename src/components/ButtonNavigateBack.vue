<script setup>
import { Icon } from '@iconify/vue'
import { ButtonIcon } from './_UI'
</script>

<template>
  <ButtonIcon @handleClick="$router.back()" :text="'Inapoi'">
    <template #start>
      <Icon icon="formkit:arrowleft" width="24" />
    </template>
  </ButtonIcon>
</template>
