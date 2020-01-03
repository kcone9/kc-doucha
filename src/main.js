import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import { Switch, FormItem, Form, TimePicker, DatePicker, CheckboxButton, CheckboxGroup, Radio, Option, Select, Button, Menu, Submenu, MenuItemGroup, MenuItem, Header, Container, Aside, Main, Footer, RadioButton, RadioGroup, Input, Steps, Step, Icon, Dialog, Breadcrumb, BreadcrumbItem, Upload, Table, TableColumn, Checkbox, Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import PublicSearch from './components/PublicSearch'
import PublicChekcbox from './components/PublicCheckbox'
import PublicPage from './components/PublicPage'
Vue.config.productionTip = false
Vue.component('ppage', PublicPage)
Vue.component('psearch', PublicSearch)
Vue.component('pcheckbox', PublicChekcbox)
Vue.component(Switch.name, Switch)
Vue.component(FormItem.name, FormItem)
Vue.component(Form.name, Form)
Vue.component(TimePicker.name, TimePicker)
Vue.component(DatePicker.name, DatePicker)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(Radio.name, Radio)
Vue.component(Button.name, Button)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Header.name, Header)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Footer.name, Footer)
Vue.component(RadioButton.name, RadioButton)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Input.name, Input)
Vue.component(Steps.name, Steps)
Vue.component(Step.name, Step)
Vue.component(Icon.name, Icon)
Vue.component(Dialog.name, Dialog)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Upload.name, Upload)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Table.name, Table)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Pagination.name, Pagination)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
