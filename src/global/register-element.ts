import { App } from 'vue'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElTable
} from 'element-plus'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElTable
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
