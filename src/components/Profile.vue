<template>
  <div class="profile">
    <div class="content">
    <div class="profile-img">
      <img src="../assets/my-photo.jpg">
    </div>
    <div class="profile_txt">
      <h3> {{ name }} </h3>
      <p class="en"> {{ name_en }} </p>
      <p v-html="text"></p>
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
  name: 'Profile',
  data () {
    return {
      name: '伊藤 秀人',
      name_en: 'Syuto Ito',
      text: '元来からもの作りが好きで、これを活かして仕事にできるスキルを身に付けようと思い、2018年春頃よりWEB制作の学習を独学で開始する。<br>2018年11月にWEB制作会社へ実務未経験で入社。入社2ヵ月目でWEBサイトの下層ページ約6ページ分のデザイン・コーディングを約5日間で行う。<br>当初はWEBデザインがやりたいと考えていたが、業務でプログラミングにも触れていく中で、開発をやりたいという思いが強くなる。<br>将来的にはフロントエンド、バックエンド両方をカバーできるエンジニアになりたいと考えており、PHPは一人称での開発が可能、また現在Vue.jsを独学にて学習中。<br>未経験での入社だったため当初は苦労したが、その環境を楽しむことでスキルを高めることができ、困難であればあるほど成長できるタイプであると自負している。',
      items: [
        { title: '生年月日', detail: '1989/01/11' },
        { title: '年齢', detail: '32歳' },
        { title: '出身', detail: '福井県' },
        { title: '好きな映画', detail: '「青い春」、「パーマネントバケーション」、「ストレンジャー・ザン・パラダイス」' }
      ],
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
