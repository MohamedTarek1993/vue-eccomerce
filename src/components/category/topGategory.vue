<template>
  <section class="top_category">
    <div class="container">
        <h3>{{ $t('top_category') }}</h3>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12" v-for="(list , index) in products " :key="index">
                <Card :category="list" />
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { categoryData } from "@/api/category/category.js";
import Card from "@/components/category/card.vue";


export default {
    components:{
        Card
    },
    props:['number'],
    data() {
    return {
        products: [],
        catogrySize:0,
    };
  },
  mounted() {
    categoryData().then((response) => {
      this.products = response.data;
    //   console.log(this.catogrySize);
      return response;
    });
    this.catogrySize = Math.min( 6 , this.products.length );
    console.log(this.catogrySize);
  },
}
</script>

<style>

</style>