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
      <btn round nav link href="https://github.com/zzh97228">
        <icon brand style="font-size: 16px;">github</icon>
      </btn>
    </nav-bar>
    <substance min-height="calc(100vh - 48px)">
      <container max-width="960px" style="margin: auto;padding: 16px 0">
        <card elevation="md" min-height="calc(100% - 32px)">
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