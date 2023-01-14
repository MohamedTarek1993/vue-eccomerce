<template>
  <div class="product_section">
    <div class="container">
      <div class="row cards">
        <div
          class="col-lg-4 col-md-6 col-12 card"
          v-for="(product, index) in products"
          :key="index"
        >
          <router-link :to="`/products/${product.id}`">
            <Card :product="product"> </Card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/product/card.vue";
import { catData } from "@/api/product/card.js";

export default {
  name: "products",
  components: {
    Card,
  },

  data() {
    return {
      products: [],
    };
  },
  mounted() {
    catData().then((response) => {
      this.products = response.data;
      //  console.log(this.products);
      return response;
    });
  },
};
</script>

<style></style>
