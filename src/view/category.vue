<template>
    <section class="category_page">
        <div class="container">
            <router-link class="btn first" to="/add-category">
          {{ $t("add_category") }}</router-link
        >
         <category-tabs />

        </div>
    </section>
         
</template>

<script>
import categoryTabs from "@/components/category/categoryTabs.vue";

export default {
name:"category",
components:{
    categoryTabs
}
}
</script>

<style>

</style>