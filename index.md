<h1 align="center">
  Lagabu
</h1>


<card>
  <card-title>
    Lagabu
  </card-title>
  <card-content>
    <btn color="primary">button</btn>
  </card-content>
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
      num: 2
    }
  }
}
</script>
