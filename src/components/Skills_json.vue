<template>
  <div class="skills">
    <div class="content">
    <div class="profile_txt">
      <h3> {{ name }} </h3>
      <p class="en"> {{ name_en }} </p>
      <ul>
        <li v-for="(skill, index) in skills" :key=index>
            <div class="ttl">{{ skill.skill }}</div>
            <div class="txt">{{ skill.level }}</div>
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
      skills: [],
    }
  },
  methods: {
      getSkill() {
              this.axios.get('https://syutoito.com/manage/skills_json.php')
              .then((response) => {
              console.log(response.data);
                  response.data.forEach(element => {
                      this.skills.push({
                          skill: element.skills,
                          level: element.level,
                      });
                  });
                  })
                  .catch((e) => {
                    alert(e);
                  });

      },
    },
    mounted() {
        this.getSkill()
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
