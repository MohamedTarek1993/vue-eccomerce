<template>
  <div class="product_page">
    <div class="container">
        <div class="row">
            <card-second :product="product" > </card-second>
        </div>
    </div>
  </div>
</template>

<script>
 import cardSecond from "@/components/product/cardSecond.vue";
 import { catData } from "@/api/product/cardSecond.js";


export default {
name:"product",
components:{
    cardSecond
},
data() {
    return {
        product: {},
    };
  },
  mounted() {
    catData().then((response) => {
      this.product = response.data;
       console.log(this.product);
      return response;
    });
  },
}
</script>

<style>

</style>