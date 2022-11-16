<template>
  <div class="main">
    <div class="left">this is name {{ userStore.name }}</div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/pinias/user'
const userStore = useUserStore()
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
}
.left {
  border: 1px solid yellow;
  width: 200px;
  height: 100vh;
}
</style>
