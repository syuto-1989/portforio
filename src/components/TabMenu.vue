
<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'skills', path: '/skills' },
        { title: 'outputs', path: '/outputs' },
        { title: 'graphic', path: '/graphic' }
      ]
    }
  }
}
</script>

<style scoped>

ol {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 25%;
  height: 50px;
  font-size: 14px;
  background-color: #f5e523;
  border-radius: 8px;
  position: relative;
  margin: 0 5px;
  transition: all .3s;
}

li:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #000;
  text-decoration: none;
  line-height: 50px;
  font-weight: bold;
}

</style>
