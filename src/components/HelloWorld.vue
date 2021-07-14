<template>
  <div class="hello">

    <h1>Syuto Ito Portfolio Site</h1>
    <div class="img">
      <img src="../assets/my-photo.jpg">
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: bold;
    letter-spacing: 0.4em;
    margin: 40px 0 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img {
  width: 650px;
  overflow: hidden;
  height: 500px;
  position: relative;
  margin: auto;
}
.img::after {
    width: 100%;
    content: '';
    display: block;
    background: #000;
    height: 100%;
    position: absolute;
    opacity: 0.5;
}
img {
  max-width: 100%;
  width: 100%;
  display: block;
  transform: scale(2.1);
  position: absolute;
  top: 30%;
}
</style>
