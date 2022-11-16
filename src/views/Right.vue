<template>
  <Test :list="list">
    <template #default="slotProps">
      {{ slotProps.i }}
    </template>
    <template #why="sp"> {{ sp.i }} </template>
  </Test>
</template>
<script setup lang="ts">
import Test from '@/views/Test.vue' // @ is an alias to /src
import { ref } from 'vue'
const list = ref(['jacob', 'tim', 'str', 'kele'])
</script>
<style scoped></style>
