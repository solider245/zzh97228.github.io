<template>
  <app>
    <nav-bar elevation="xs" height="48px" style="padding-right: 16px;">
      <nav-bar-title>
        <btn href="/index.html" depressed>
          Lagabu's Blog
        </btn>
      </nav-bar-title>
      <white-spacer></white-spacer>
      <btn nav link color="primary" href="/resume.html">Resume</btn>

      <btn nav link color="primary" href="/leetcode/index.html">Leetcode</btn>
      <dropdown to="#app">
        <template v-slot:activator>
          <btn nav link color="primary">About</btn>
        </template>
        <list elevation="xs">
          <list-item href="/README.html">
            <icon left>book-reader</icon>
            README
          </list-item>
          <list-item href="https://github.com/zzh97228">
            <icon brand left>github-alt</icon>
            Github
          </list-item>
        </list>
      </dropdown>
    </nav-bar>
    <substance min-height="calc(100vh - 48px)">
      <container max-width="960px" style="margin: auto;padding: 16px 0">
        <card>
          <card-content>
            <Content />
          </card-content>
        </card>
      </container>
    </substance>
    <card color="primary" height="128px">
      <row justify="center" align="center" style="height: 100%;">
        <row-item shrink>
          <span class="theme--dark">Lagabu's Blog</span>
        </row-item>
      </row>
    </card>
  </app>
</template>
<script>
import * as compos from 'lagabu/lib/components/index.js';
export default {
  name: 'layout',
  components: {
    ...compos,
  },
};
</script>