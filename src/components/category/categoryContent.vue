<template>
  <div class="tab-content" id="v-pills-tabContent">
    <div
      :class="`tab-pane fade ${index == 0 ? 'show active' : ''}`"
      :id="`v-pills-${index}`"
      role="tabpanel"
      :aria-labelledby="`v-pills-${index}-tab`"
      v-for="(product , index) in name.products" :key="index"
      >
      <Card  :product="product" > </Card>
    </div>
  </div>
</template> 


 

<script>
 import { categoryData } from "@/api/category/category.js";
import Card from '../product/card.vue';

export default {
  components: { Card },
  data() {
    return {
      name: {
        products:[]
      }
     
    };
  },
  mounted() {
    categoryData().then((response) => {
      this.products = response.data;
        console.log(this.products);
      return response;
    });
  },
}
</script>

<style>

</style>