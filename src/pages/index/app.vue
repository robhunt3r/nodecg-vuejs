<template>
  <div id="app">
    <el-col :span="4">
      <el-card class="box-card">
        <h2>Component List</h2>
        <div v-for="(value, key) in pages" :key="key">
          <a :href="value.filename" target="_blank">
            <i class="el-icon-document"></i>{{value.title}}
          </a>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import pages from '../../../config/pages'
export default {
  name: 'Index',
  data: function () {
    return {
      pages: pages
    }
  }
}
</script>

<style scoped lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  a,
  a:focus {
    color: #337ab7;
    cursor: pointer;
    &:hover {
      color: rgb(32, 160, 255);
    }
  }
</style>
