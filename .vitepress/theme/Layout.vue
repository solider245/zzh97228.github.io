<template>
  <app>
    <nav-bar v-show="!atResume" elevation="xs" height="48px" style="padding-right: 16px;">
      <nav-bar-title>
        <btn :href="$site.base + 'index.html'" depressed>Lagabu's Blog</btn>
      </nav-bar-title>
      <white-spacer></white-spacer>
      <btn nav link color="primary" :is-active="atInterview" :href="$site.base + 'interview/index.html'">Interview</btn>
      <btn nav link color="primary" :href="$site.base + 'resume.html'">Resume</btn>
      <btn nav link color="primary" :is-active="atLeetcode" :href="$site.base + 'leetcode/index.html'">Leetcode</btn>
      <btn round nav link target="blank" href="https://github.com/zzh97228">
        <icon brand style="font-size: 16px;">github</icon>
      </btn>
    </nav-bar>
    <substance min-height="calc(100vh - 48px)">
      <container max-width="960px" style="margin: auto;padding: 16px 0">
        <card :elevation="null" min-height="calc(100% - 32px)">
          <card-content :style="contentStyle">
            <Content class="theme" />
          </card-content>
        </card>
      </container>
    </substance>
    <card v-show="!atResume" color="primary" height="128px">
      <row justify="center" align="center" style="height: 100%;">
        <row-item shrink>
          <span class="theme--dark">Lagabu's Blog</span>
        </row-item>
      </row>
    </card>
  </app>
</template>

<script>
import { useRoute } from 'vitepress';
export default {
  name: 'layout',
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  computed: {
    atResume() {
      return this.route.path.indexOf('resume') !== -1;
    },
    atLeetcode() {
      return this.route.path.indexOf('leetcode') !== -1;
    },
    atInterview() {
      return this.route.path.indexOf('interview') !== -1;
    },
    atHome() {
      return this.route.path === '/' || this.route.path === '/index.html';
    },
    contentStyle() {
      return {
        padding: this.atResume || this.atHome ? '4px' : '8px 26px',
      };
    },
  },
};
</script>

<style lang="less">
</style>