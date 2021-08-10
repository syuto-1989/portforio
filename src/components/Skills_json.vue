<template>
  <div class="skills">
    <div class="content">
    <div class="profile_txt">
      <h3> {{ name }} </h3>
      <p class="en"> {{ name_en }} </p>
      <div class="skill--box">
        <p class="category--ttl"> 言語 </p>
          <ul>
            <li v-for="(skill, index) in skills_lang" :key=index>
                <div class="ttl">{{ skill.skill }}</div>
                <div class="txt">{{ skill.level }}</div>
                <div class="txt--long">{{ skill.skill_level }}</div>
            </li>
          </ul>
      </div>
      <div class="skill--box">
        <p class="category--ttl"> ライブラリ・フレームワーク </p>
          <ul>
            <li v-for="(skill, index) in skills_frame" :key=index>
                <div class="ttl">{{ skill.skill }}</div>
                <div class="txt">{{ skill.level }}</div>
                <div class="txt--long">{{ skill.skill_level }}</div>
            </li>
          </ul>
      </div>
      <div class="skill--box">
        <p class="category--ttl"> データベース </p>
          <ul>
            <li v-for="(skill, index) in skills_db" :key=index>
                <div class="ttl">{{ skill.skill }}</div>
                <div class="txt">{{ skill.level }}</div>
                <div class="txt--long">{{ skill.skill_level }}</div>
            </li>
          </ul>
      </div>
      <div class="skill--box">
        <p class="category--ttl"> OS </p>
          <ul>
            <li v-for="(skill, index) in skills_os" :key=index>
                <div class="ttl">{{ skill.skill }}</div>
                <div class="txt">{{ skill.level }}</div>
                <div class="txt--long">{{ skill.skill_level }}</div>
            </li>
          </ul>
      </div>
      <div class="skill--box">
        <p class="category--ttl"> ミドルウェア・サーバー </p>
          <ul>
            <li v-for="(skill, index) in skills_mw" :key=index>
                <div class="ttl">{{ skill.skill }}</div>
                <div class="txt">{{ skill.level }}</div>
                <div class="txt--long">{{ skill.skill_level }}</div>
            </li>
          </ul>
      </div>
      <div class="skill--box">
        <p class="category--ttl"> その他ツール </p>
          <ul>
            <li v-for="(skill, index) in skills_other" :key=index>
                <div class="ttl">{{ skill.skill }}</div>
                <div class="txt">{{ skill.level }}</div>
                <div class="txt--long">{{ skill.skill_level }}</div>
            </li>
          </ul>
      </div>
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
      skills_lang: [],
      skills_frame: [],
      skills_db: [],
      skills_os: [],
      skills_mw: [],
      skills_other: [],
    }
  },
  methods: {
      getSkill() {
              this.axios.get('https://syutoito.site/manage/skills_json.php')
              .then((response) => {
                  response.data.forEach(element => {
                    if(element.category_id == 1){
                      this.skills_lang.push({
                          skill: element.skills,
                          level: element.level,
                          skill_level: element.skill_level,
                      });
                    }else if(element.category_id == 2){
                      this.skills_frame.push({
                          skill: element.skills,
                          level: element.level,
                          skill_level: element.skill_level,
                      });
                    }else if(element.category_id == 3){
                      this.skills_db.push({
                          skill: element.skills,
                          level: element.level,
                          skill_level: element.skill_level,
                      });
                    }else if(element.category_id == 4){
                      this.skills_os.push({
                          skill: element.skills,
                          level: element.level,
                          skill_level: element.skill_level,
                      });
                    }else if(element.category_id == 5){
                      this.skills_mw.push({
                          skill: element.skills,
                          level: element.level,
                          skill_level: element.skill_level,
                      });
                    }else if(element.category_id == 6){
                      this.skills_other.push({
                          skill: element.skills,
                          level: element.level,
                          skill_level: element.skill_level,
                      });
                    }
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
    width: 100%;
}
li {
    margin: 15px 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.ttl {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0px 10px;
    width: 15%;
}
.txt {
    width: 15%;
}
.txt--long {
    width: 70%;
    margin-left: 20px;
}
img {
    max-width: 100%;
    display: block;
}
.profile_txt {
    width: 100%;
    padding: 20px;
}
p.category--ttl {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0px;
    margin-left: 10px;
    display: flex;
    align-items: center;
}
p.category--ttl::before {
    content: '';
    display: block;
    border-left: 7px solid #333;
    width: 2px;
    height: 20px;
    margin-right: 10px;
}
.skill--box {
    margin-top: 40px;
    width: 65%;
    margin: 40px auto 0;
}

</style>
