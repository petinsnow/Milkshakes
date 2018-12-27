<template>
  <div class="orderdetail">
    <img src="@/assets/back.png" class="back" @click="onBack()">
    <table class="header">
      <tr>
        <td>Total Orders:</td>
        <td>7</td>
        <td>Done:</td>
        <td>4</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NewOrder',
  data () {
    return {
      appname: 'New Order'
    }
  },
  methods: {
    onBack () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
  font-size: 75px;
  z-index: 3;
}
.back {
  width: 85px;
  position: absolute;
  top: 40px;
  left: 64px;
  z-index: 3;
}
</style>
