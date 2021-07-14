import Vue from 'vue'
import App from './App.vue'
import router from './router' //追加
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

Vue.config.productionTip = false

Vue.use(VueAxios, axios) //追記

new Vue({
  router, //追加
  render: h => h(App),
}).$mount('#app')
/*
new Vue2({
  el:'#app2',
  data: {
    question: ''
  },
  methods: {
    add: function() {
      console.log(this.question)
    }
  }
})
*/
