<template>
  <div class="home">
    <div class="role-list">
      <div
        v-for="item of list"
        @click="handleClick(item.id)"
        :key="item.id"
        :class="{ active: active === item.id }"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="to-login" @click="handleChangeFullname">
      handleOnChangeComputed
    </div>
    <h3 ref="titleRef">titleRef</h3>
    <div @click="handleChangeAge">{{ age }}</div>
    {{ fullName }}
    <home msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
// watchEffect用于自动收集响应式数据的依赖。
// watch需要手动指定侦听的数据源。
import { ref, computed, watchEffect } from 'vue'
import Home from '@/components/Home.vue' // @ is an alias to /src
const list = ref([
  { id: 1, name: '张三' },
  { id: 2, name: '李三' }
])
const titleRef = ref(null)
// let [1,2,3].map(())
let firstName = ref('jacob')
let lastName = ref('zgedu')
let age = ref(1)
const fullName = computed(() => firstName.value + lastName.value)
const handleChangeFullname = () => {
  firstName.value = 'sss'
}

const stop = watchEffect(
  (onInvalidate) => {
    // watchEffect: 1.自动收集响应式的依赖 2.默认会先执行一次 3.获取不到新值和旧值
    // watchEffect停止侦听
    // flush: "post" // 修改执行时机，支持 pre, post, sync
    // 注意：Vue3.2+ 以后watchPostEffect是watchEffect 带有 flush: 'post' 选项的别名。watchSyncEffect是watchEffect 带有 flush: 'sync' 选项的别名。
    //  watchEffect清除副作用
    const timer = setTimeout(() => {
      console.log('网络请求')
    }, 2000)
    onInvalidate(() => {
      clearInterval(timer)
      console.log('onInvalidate')
    })
    console.log('refTitleValue===', titleRef.value)
    console.log('age===', age.value)
    console.log('fullName===', fullName.value)
  },
  { flush: 'post' }
)
const handleChangeAge = () => {
  age.value++
  if (age.value > 6) {
    stop()
  }
}
const arr: number[] = [1, 2, 3, 4, 8, 9, 11]

arr.shift()
arr.reverse()
let s = arr.reduce((pre, current) => pre + current)
console.log(s, arr)

let active = ref(1)
const handleClick = (id: number) => {
  active.value = id
}
</script>
<style lang="less">
.role-list {
  justify-content: center;
  display: flex;
  div {
    width: 60px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #fdb;
    cursor: pointer;
  }
  .active {
    background: yellow;
  }
}
.to-login {
  background: yellow;
}
</style>
