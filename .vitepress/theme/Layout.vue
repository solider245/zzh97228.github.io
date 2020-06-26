<template>
  <app>
    <nav-bar elevation="xs" height="48px">
      <nav-bar-title>
        <btn href="/index.html" depressed>
          Lagabu's Blog
        </btn>
      </nav-bar-title>
      <white-spacer></white-spacer>
      <btn
        nav
        link
        color="primary"
        target="blank"
        href="/README.html"
        >README</btn
      >
      <btn
        nav
        link
        color="primary"
        target="blank"
        href="https://github.com/zzh97228"
        >Github</btn
      >
    </nav-bar>
    <substance min-height="100vh">
      <container>
        <Content />
      </container>
    </substance>
    <card color="primary" height="128px">

    </card>
  </app>
</template>
<script>
import {
  App,
  Substance,
  Container,
  NavBar,
  NavBarTitle,
  WhiteSpacer,
  Btn,
  Card
} from 'lagabu/lib/entry-libs.js';
export default {
  name: 'layout',
  components: {
    App,
    Substance,
    Container,
    NavBar,
    Btn,
    NavBarTitle,
    WhiteSpacer,
    Card
  },
};
</script>
<style lang="less">
@import './assets/main.less';
h2 {
  margin: 8px 0;
}
</style>
