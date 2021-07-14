<template>
  <div class="skills">
    <div class="content">
    <div class="profile_txt">
      <h3> {{ name }} </h3>
      <p class="en"> {{ name_en }} </p>
      <ul>
        <li v-for="(item, index) in items" :key=index>
            <div class="ttl">{{ item.title }}</div>
            <div class="txt">{{ item.detail }}</div>
        </li>
      </ul>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      name: '伊藤 秀人',
      name_en: 'Syuto Ito',
      items: [
        { title: 'PHP', detail: '実務2年～3年' },
        { title: 'JavaScript ', detail: '実務2年～3年' },
        { title: 'Photoshop', detail: '実務2年～3年' },
        { title: 'Illustrator', detail: '実務2年～3年' },
        { title: 'CSS', detail: '実務2年～3年' },
        { title: 'HTML', detail: '実務2年～3年' },
        { title: 'Sass', detail: '実務1年' },
        { title: 'jQuery', detail: '実務2年～3年' },
        { title: 'Laravel', detail: '実務2年～3年' },
        { title: 'MySQL', detail: '実務2年～3年' },
        { title: 'Vue.js', detail: '独学' },
        { title: 'Git', detail: '実務1年' },
        { title: 'LAMP構築', detail: '独学' },
        { title: 'グラフィックデザイン', detail: '独学' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

h3 {
  color: #000;
  margin-bottom: 0;
}

p {
  width: 100%;
  display: inline-block;
  text-align: left;
}
p.en {
    text-align: center;
    margin-top: 0px;
}
ul {
    width: 100%;
    margin: auto;
    text-align: left;
    list-style: none;
    padding: 0;
}
li {
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ttl {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0px 10px;
}
img {
    max-width: 100%;
    display: block;
}
.profile_txt {
    width: 100%;
    padding: 20px;
}

</style>
