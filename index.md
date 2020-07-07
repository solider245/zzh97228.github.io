<row gutter="xs">
  <row-item sm="12" md="6" v-for="(c, i) in cards" :key="'card'+ i" shrink style="padding-bottom: 8px;">
    <card :elevation="null">
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

<script>
export default {
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
          subtitle: '没什么就是个readme',
          href: '/README.html',
          btnName: 'readme'
        }
      ]
    }
  }
}
</script>
