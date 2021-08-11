<template>
  <div class="output">
    <div class="content">
    <ul>
      <li v-for="(output, index) in outputs" :key=index>
      <a v-bind:href="output.link" target="_blank">
          <div class="img"><img v-bind:src="output.img" v-bind:alt="output.title"></div>
          <div class="ttl">{{ output.title }}</div>
          <div class="txt">{{ output.comment }}</div>
      </a>

      </li>
    </ul>

  </div>
  </div>
</template>

<script>

export default {
  name: 'Output',
  data () {
    return {
      outputs: [],
    }
  },
  methods: {
      getOutput() {
              this.axios.get('https://syutoito.site/manage/outputs_json.php')
              .then((response) => {
              console.log(response.data);
                  response.data.forEach(element => {
                      this.outputs.push({
                          title: element.title,
                          comment: element.comment,
                          link: element.link,
                          img: 'https://syutoito.site/manage/outputs/register/images/' + element.img
                      });
                  });
                  })
                  .catch((e) => {
                    alert(e);
                  });

      },
    },
    mounted() {
        this.getOutput()
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
  padding: 30px;
}

h3 {
  color: white;
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
li {
    margin: 15px 0;
    display: flex;
    align-items: center;
}
.ttl {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0px 10px;
}
.output ul {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
}
.output ul li {
    width: calc(50% - 10px);
}
.output ul li a {
    display: block;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
</style>
