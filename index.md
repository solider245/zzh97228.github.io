<row gutter="xs">
<row-item sm="12" md="6" v-for="(c, i) in cards" :key="i" shrink style="padding-bottom: 8px;">
<card outlined :elevation="null">
<card-title>
{{ c.title }}
</card-title>
<card-subtitle>
{{ c.subtitle }}
</card-subtitle>
<card-actions>
<btn color="primary" :href="c.href">
<icon left>hand-point-right</icon>
{{ c.btnName }}
</btn>
</card-actions>
</card>
</row-item>
</row>
<iframe src="/resume.html"></iframe>

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
          title: 'README',
          subtitle: '建立Lagabu\'s Blog的原因',
          href: '/README.html',
          btnName: 'readme'
        }
      ]
    }
  }
}
</script>
