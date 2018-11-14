import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './app.vue'

Vue.use(Element, { locale })

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
