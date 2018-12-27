<template>
  <div class="orderlist">
    <img src="@/assets/back.png" class="back" @click="onBack()">
    <table class="header">
      <tr>
        <td>Total Orders:</td>
        <td>7</td>
        <td>Done:</td>
        <td>4</td>
      </tr>
    </table>
    <mdb-datatable
    :data="data"
    striped
    bordered class="orderlisttable"/>
  </div>
</template>

<script>
import { mdbDatatable } from 'mdbvue'

export default {
  name: 'OrderList',
  components: {
    mdbDatatable
  },
  data () {
    return {
      data: {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc'
          },
          {
            label: 'Ordered Date',
            field: 'date',
            sort: 'asc'
          },
          {
            label: 'Status',
            field: 'status'
          },
          {
            label: 'View',
            field: 'view'
          }
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            date: '2011/04/25',
            status: 'true',
            view: 'View'
          },
          {
            name: 'Garrett Winters',
            date: '2011/07/25',
            status: 'false',
            view: 'view'
          },
          {
            name: 'Ashton Cox',
            date: '2009/01/12',
            status: 'true',
            view: 'view'
          }
        ]
      }
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
.orderlist {
  width: 100%;
  height: 100%;
}
.orderlisttable {
  position: relative;
  z-index: 3;
}
.header {
  height: 90px;
  width: 60vw;
  z-index: 3;
  font-size: 46px;
}
h2 {
  font-weight: bold;
  font-size: 46px;
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
