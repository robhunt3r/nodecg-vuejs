import Vue from 'vue'
import Alerts from '../../components/Alerts'
import nodecg from '../../services/nodecg-api'

import '../../assets/styles/alerts.scss'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  nodecg,
  render: h => h(Alerts)
})
