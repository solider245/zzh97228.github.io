<row gutter="xs" column style="padding: 8px;">
  <row-item v-for="(c, i) in cards" :key="'card'+ i" shrink style="padding-bottom: 8px;">
    <card elevation="xs" style="padding: 8px">
      <card-title>
        {{ c.title }}
      </card-title>
      <card-subtitle>
        {{ c.subtitle }}
      </card-subtitle>
      <card-actions>
        <btn color="primary" :href="c.href" style="margin-left: auto">
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
          href: this.$site.base + 'leetcode/index.html',
          btnName: 'leetcode'
        },
        {
          title: 'Interview',
          subtitle: '个人面试合集',
          href: this.$site.base + 'interview/index.html',
          btnName: 'interview'
        },
        {
          title: 'README',
          subtitle: '没什么就是个readme',
          href: this.$site.base + 'README.html',
          btnName: 'readme'
        },
        {
          title: 'Devops',
          subtitle: '一些常用的配置参考',
          href: this.$site.base + 'devops/index.html',
          btnName: 'devops'
        }
      ]
    }
  }
}
</script>
