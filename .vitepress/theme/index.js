import lagabu from 'lagabu/dist/lagabu.es.min.js';
import 'lagabu/dist/lagabu.min.css';
import './assets/main.less';
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css';
import 'vitepress/dist/client/theme-default/styles/layout.css';
import 'prismjs/themes/prism-coy.css';
import Layout from './Layout.vue';
import Resume from './resume.vue';

export default {
  Layout,
  NotFound: () => 'Not Found 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.use(lagabu).component('resume', Resume);
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
