<template>
 
    <img :src="product.imageURL" alt="products" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
</template>

<script>

export default {
    name:'card' ,
    props:['product'],
};
</script>

<style></style>
