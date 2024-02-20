<template>
  <div class="home">

    <Products />
  </div>
</template>

<script>
import Products from "../components/Products.vue"

export default {
  name: 'HomeView',
  data(){
    return{

    }
  },
  components: {
    Products
  }
}
</script>
