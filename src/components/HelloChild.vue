<template>
 <div>
  <p>{{title}}</p>
  <!-- ボタンが押されるとincrementCounterが実行される -->
  <button v-on:click="incrementCounter">{{ counter }}</button>
 </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'はろー！こども！',
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      // 親コンポーネントのincrementが呼び出す（実行）
      this.$emit('increment')
    }
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
