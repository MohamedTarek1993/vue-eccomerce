<template>
  <div class="categories_tabs">
    <div class="d-flex align-items-start">
      <category-head />
      <category-content />
    </div>
  </div>
</template>

<script>
import categoryHead from "@/components/category/categoryHead.vue";
import categoryContent from "@/components/category/categoryContent.vue";

export default {
  name: "categoryTabs",
  components: {
    categoryContent,
    categoryHead,
  },
};
</script>

<style></style>
