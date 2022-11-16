import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'
import router from './router'
import store from './store'
import data from './pinias'
import 'normalize.css'
import './assets/css/index.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(data)

app.use(Antd)
app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
