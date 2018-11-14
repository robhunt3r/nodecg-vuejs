import Vue from 'vue'
import MockNodeCG from 'mock-nodecg'

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.nodecg) {
      this.$nodecg = options.nodecg
    } else if (options.parent && options.parent.$nodecg) {
      this.$nodecg = options.parent.$nodecg
    }
  }
})

// eslint-disable-next-line no-undef
export default (typeof nodecg !== 'undefined') ? nodecg : new MockNodeCG({ bundleName: 'nodecg-vue' })
