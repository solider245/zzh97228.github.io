import 'lagabu/dist/lagabu.min.css';
import 'prismjs/themes/prism-coy.css';
import './assets/main.less';

// import 'prismjs/themes/prism-okaidia.css';
import Layout from './Layout.vue';

export default {
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
