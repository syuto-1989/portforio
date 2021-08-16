<template>
  <div class="profile">
    <div class="content">
    <div class="profile-img">
      <img src="../assets/my-photo.jpg">
    </div>
    <div class="profile_txt">
      <h3> {{ name }} </h3>
      <p class="en"> {{ name_en }} </p>
      <p v-html="texts"></p>
      <ul>
        <li v-for="(profile, index) in profiles" :key=index>
            <div class="ttl">生年月日</div>
            <div class="txt">{{ profile.birth }}</div>
            <div class="ttl">年齢</div>
            <div class="txt">{{ profile.age }}歳</div>
            <div class="ttl">出身</div>
            <div class="txt">福井県</div>
        </li>
      </ul>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: '伊藤 秀人',
      name_en: 'Syuto Ito',
      texts: '',
      profiles: [],
      items: [{ title: '好きな映画', detail: '「青い春」、「パーマネントバケーション」、「ストレンジャー・ザン・パラダイス」' }
      ],
    }
  },
  methods: {
      getProfile() {
              this.axios.get('https://syutoito.site/manage/profiles_json.php')
              .then((response) => {
                  response.data.forEach(element => {
                  console.log(element);
                      this.texts = element.texts;
                      this.profiles.push({
                          birth: element.birth,
                          age: element.age,
                      });
                  });
                  })
                  .catch((e) => {
                    alert(e);
                  });

      },
    },
    mounted() {
        this.getProfile()
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
    margin: 10px 0;
}
.ttl {
    font-size: 1.2em;
    font-weight: bold;
}
.profile-img {
    width: 50%;
}
img {
    max-width: 100%;
    display: block;
}
.profile_txt {
    width: 50%;
    padding: 20px;
}

</style>
