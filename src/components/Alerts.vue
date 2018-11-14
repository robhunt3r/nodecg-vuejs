<template>
  <div>
    <h1>This is my alert component!</h1>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Alerts',
  data: function () {
    return {
      message: 'This is a template message'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$nodecg.listenFor('nodecg-vue-test', function (data) {
        this.message = data
      })
    })
  }
}
</script>

<style scoped lang="scss">
</style>
