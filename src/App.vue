<template>
  <div id="app">
    <img src="./assets/background.jpg" class="background">
    <img src="./assets/waiter.png" class="waiter">
    <div class="opacity-background"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fe8500;
}
.background {
  position: absolute;
  width: 60%;
  bottom: 80px;
}
.waiter {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 25%;
}
.opacity-background {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  opacity: 0.3;
  z-index: 2;
}
</style>
