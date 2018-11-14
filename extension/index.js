'use strict'

module.exports = function (nodecg) {
  let time = 1
  setInterval(() => {
    nodecg.sendMessage('nodecg-vue-test', 'This message has been updated... ' + time++)
  }, 5000)
}
