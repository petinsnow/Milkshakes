<template>
  <div class="neworder">
    <img src="@/assets/back.png" class="back" @click="onBack()">
    <h1>New Order</h1>
    <mdb-input label="Name" class="name"/>
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
.neworder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  position: absolute;
  top: 20px;
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
.name {
  position: relative;
  z-index: 3;
}
</style>
