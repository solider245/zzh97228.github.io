<row gutter="xs">
<row-item sm="12" md="6" v-for="(c, i) in cards" :key="i">
<card :elevation="null">
  <card-title>
    {{ c.title }}
  </card-title>
  <card-subtitle>
    {{ c.subtitle }}
  </card-subtitle>
  <card-content>
    <btn color="primary" :href="c.href">{{ c.btnName }}</btn>
  </card-content>
</card>
</row-item>
</row>


<card :elevation="null" style="margin-top: 12px;">
  <card-title>
    Lagabu
  </card-title>
</card>


<script>
import * as compos from 'lagabu/lib/components/index.js'
export default {
  name: 'temp',
  components: {
    ...compos
  },
  data() {
    return {
      cards: [
        {
          title: 'Leetcode',
          subtitle: '个人Leetcode题解集',
          href: '/leetcode/index.html',
          btnName: 'leetcode-solution'
        },
        {
          title: 'Resume',
          subtitle: 'Lagabu的个人简历',
          href: '/resume.html',
          btnName: 'resume'
        }
      ]
    }
  }
}
</script>
