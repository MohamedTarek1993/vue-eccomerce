<template>
    <div class="col-lg-6 col-12">
      <div class="img">
        <img :src="product.img" alt="" />
      </div>
      <div class="col-lg-6 col-12">
        <h2>{{ product.title }}</h2>
        <span>{{ $t("price :") }} {{ product.price }}</span>
  
        <router-link to="#">
          <span>{{ $t("Category :") }}</span>
          {{ product.category }}</router-link>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "cardSecond",
    props: ["product"],
  };
  </script>
  
  <style></style>
  