<template>
  <div v-for="(i, k) in props" :key="k">
    <slot :i="i" :k="k"></slot>
    <slot name="why" :i="i"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
// let why = ref('why')
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>
