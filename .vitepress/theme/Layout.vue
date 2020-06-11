<template>
  <app>
    <Content />
  </app>
</template>
<script>
import { App } from 'lagabu/lib/entry-libs.js'
export default {
  name: 'layout',
  components: {
    App
  }  
}
</script>
<style lang="less">
@import './assets/main.less';
h2 {
  margin: 8px 0;
}
</style>