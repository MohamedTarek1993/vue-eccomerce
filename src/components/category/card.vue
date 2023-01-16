<template>
  <div class="category_card">
    <div class="img">
      <!-- <img :src=category.imageUrl  alt="category" /> -->
      <h2>{{ category.categoryName }}</h2>
      <p>{{ category.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["category"],
};
</script>

<style></style>
