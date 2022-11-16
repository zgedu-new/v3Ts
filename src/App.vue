<template>
  <div id="nav">
    <router-view></router-view>
    <!-- <a-layout>
      <a-layout-sider width="256px">
        <div class="left">
          <div class="admin-header">admin</div>
          <a-menu
            id="dddddd"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            style="width: 256px"
            mode="inline"
            @click="handleClick"
          >
            <a-sub-menu key="sub1" @titleClick="titleClick">
              <template #icon>
                <MailOutlined />
              </template>
              <template #title>Navigation One</template>
              <a-menu-item-group key="g1">
                <template #icon>
                  <QqOutlined />
                </template>
                <template #title>Item 1</template>
                <a-menu-item key="1">Option 1</a-menu-item>
                <a-menu-item key="2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group key="g2" title="Item 2">
                <a-menu-item key="3">Option 3</a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu key="sub2" @titleClick="titleClick">
              <template #icon>
                <AppstoreOutlined />
              </template>
              <template #title>Navigation Two</template>
              <a-menu-item key="5">Option 5</a-menu-item>
              <a-menu-item key="6">Option 6</a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub4">
              <template #icon>
                <SettingOutlined />
              </template>
              <template #title>Navigation Three</template>
              <a-menu-item key="9">Option 9</a-menu-item>
              <a-menu-item key="10">Option 10</a-menu-item>
              <a-menu-item key="11">Option 11</a-menu-item>
              <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>
          <div class="common-layout">
            <a-tabs v-model:activeKey="activeKey">
              <a-tab-pane key="1">
                <template #tab>
                  <span>
                    <apple-outlined />
                    Tab 1
                  </span>
                </template>
                Tab 1
              </a-tab-pane>
              <a-tab-pane key="2">
                <template #tab>
                  <span>
                    <android-outlined />
                    Tab 2
                  </span>
                </template>
                Tab 2
              </a-tab-pane>
              <a-tab-pane key="3">
                <template #tab>
                  <span>
                    <android-outlined />
                    Tab 3
                  </span>
                </template>
                Tab 3
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout> -->
  </div>
</template>
<script lang="ts" setup>
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'

import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'

import { ref, watch } from 'vue'
const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])
const activeKey = ref<string>('1')
const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}
const titleClick = (e: Event) => {
  console.log('titleClick', e)
}
watch(
  () => openKeys,
  (val) => {
    console.log('openKeys', val)
  }
)
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.left {
  height: 100%;
  height: 100vh;
  width: 256px;
  // background-color: red;
}
.admin-header {
  height: 64px;
  line-height: 64px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
