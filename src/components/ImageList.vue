<template>
<div class="graphic">
  <div class="content">
    <ul class="image-list">
			<li v-for="(blog,index) in blogs" :key=index> <!--indexを引数に追加-->
      <div class="box">
				<div class="ttl">{{ blog.title }}</div>
				<div class="img"><img v-bind:src="blog.img" ></div>
      </div>
      </li>
		</ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'ImageList',
  data () {
    return {
      blogs: [
      {
        title: 'アートワーク1',
        img: require('../assets/artwork1.jpg')
      },
      {
        title: 'アートワーク2',
        img: require('../assets/artwork2.png')
      },
      {
        title: 'アートワーク3',
        img: require('../assets/artwork3.jpg')
      },
      {
        title: 'アートワーク4',
        img: require('../assets/artwork4.jpg')
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    max-width: 1200px;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
ul {
    width: 100%;
    margin: auto;
    text-align: left;
    list-style: none;
    padding: 0;
}
ul.image-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
li {
  margin: 35px 0;
  align-items: center;
  width: 50%;
}
.box {
    padding: 50px;
}
.ttl {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0px 10px;
    text-align: center;
}
.img {
    width: 100%;
    overflow: hidden;
    height: 100%;
}
img {
    max-width: 100%;
    width: 100%;
    display: block;
}

</style>
