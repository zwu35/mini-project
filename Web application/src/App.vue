
<template>
  <form autocomplete="off" action="/index.php">
  <div class="autocomplete" style="width:300px;">
    <input id="myInput" type="text" name="s" placeholder="Please enter">
  </div>
  <input type="submit">
  <googlemap />
</form>

</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import googlemap from './googlemap.vue'

export default {
  components: {
    ButtonCounter
  }
}
</script>
