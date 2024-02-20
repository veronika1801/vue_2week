<template>
    <div class="home">
  
      <Orders />
    </div>
  </template>
  
  <script>
  import Orders from "../components/Orders.vue"
  
  export default {
    name: 'OrdersView',
    data(){
      return{
  
      }
    },
    components: {
      Orders
    }
  }
  </script>
  