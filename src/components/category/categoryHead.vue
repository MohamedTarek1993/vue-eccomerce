<template>
  <div
    class="nav flex-column nav-pills me-3"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
  >
    <button
    :class="`nav-link ${index == 0 ? 'active' : ''}`"
      :id="`v-pills-${index}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#v-pills-${index}`"
      type="button"
      role="tab"
      :aria-controls="`v-pills-${index}`"
      aria-selected="true"
      v-for="(name , index) in names" :key="index"
    >
      {{ name.categoryName }}
    </button>
  </div>
</template>

<script>
 import { categoryData } from "@/api/category/category.js";

export default {

  data() {
    return {
      names: [],
    };
  },
  mounted() {
    categoryData().then((response) => {
      this.names = response.data;
      //  console.log(this.product);
      return response;
    });
  },
};
</script>

<style></style>
