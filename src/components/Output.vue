<template>
  <div class="output">
    <div class="content">
    <ul>
      <li v-for="(item, index) in items" :key=index>
          <div class="ttl"><a v-bind:href="item.link">{{ item.title }}</a></div>
          <div class="txt">{{ item.detail }}</div>
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
      name: '自主制作',
      text: '',
      items: [
        { title: 'スケジュール登録カレンダーアプリ', detail: 'Laravelで開発しました。カレンダーの日付をクリックするとその日の予定を登録できます。カレンダー画面で当日の日付は黄色く表示され、各日付内の「表示」ボタンを押すと非同期で登録されているその日の予定が表示されます。', link: 'https://sito-laravel.site/' },
        { title: '歌詞検索サービス ', detail: 'DBに登録された情報をAjaxを使用して取得・表示しています。', link: 'https://syutoito.site/lyrics/' },
        { title: '音楽活動宣伝用LP', detail: '', link: 'https://syutoito.site/' },
        { title: 'WEBチケット予約システム ', detail: 'ライブのチケット予約用システム。送信フォームと連動している。', link: 'https://syutoito.site/event/' },
        { title: '管理画面ログイン ', detail: '公演を登録する管理画面。(email:test@co.jp、pass:test1234でログインできます。)', link: 'https://syutoito.site/manage/' },
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

</style>
