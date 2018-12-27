<template>
  <div class="home">
    <h1>{{appname}}</h1>
    <Button
      title="New Order"
      background="white"
      color="#fe8500"
      width="80vw"
      height="8vh"
      fontSize="42px"
      transparent="0.85"
      @click.native="onNewOrderBtnClick()"
      class="neworder-button"
      >
    </Button>
    <Button
      title="Order List"
      background="#fe8500"
      color="white"
      width="80vw"
      height="8vh"
      fontSize="42px"
      transparent="0.85"
      @click.native="onOrderListBtnClick()"
      class="orderlist-button"
      >
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  data () {
    return {
      appname: 'Milkshakes'
    }
  },
  components: {
    Button
  },
  methods: {
    onNewOrderBtnClick () {
      this.$router.push('/neworder')
    },
    onOrderListBtnClick () {
      this.$router.push('/orderlist')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  position: absolute;
  top: 0.5vh;
  font-weight: bold;
  font-size: 54px;
  z-index: 3;
}
.neworder-button {
  margin: 15px 0;
  z-index: 3;
  opacity: 0.85;
  border-radius: 10px;
}
.orderlist-button {
  margin: 15px 0;
  z-index: 3;
  opacity: 0.85;
  border-radius: 10px;
}

</style>
