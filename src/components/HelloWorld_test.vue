<template>
 <div>
  <p>{{title}}</p>
  <p>{{ total }}</p>
  <!-- incrementと言うイベントを定義。子コンポーネントから$emitされたら、incrementTotal実行される -->
  <hello-child v-on:increment="incrementTotal"/>
 </div>
</template>

<script>
import HelloChild from './HelloChild'
export default {
  data: function () {
    return {
      title: 'はろー！わーるど！',
      total: 0
    }
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  },
  components: {
    HelloChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
