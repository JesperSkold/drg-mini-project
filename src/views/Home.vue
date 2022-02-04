<template>
	<div class="home">
		<NavBar />
		<div class="products">
      <article v-for="product in products" :key="product.name"><ProductCard :productObj="product"/></article>
    </div>
    <router-view name: CartView></router-view>
	</div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "../components/ProductCard.vue";
import NavBar from "../components/NavBar.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		ProductCard,
	},
	computed: {
		products() {
			return this.$store.state.products;
		},
	},
};
</script>

<style lang="scss" scoped>
.home {
	background-image: url(https://images.squarespace-cdn.com/content/v1/5925832e03596efb6d4b502a/1547827451369-JX3S8JTAWQMWHYFYDVNK/Magma.jpg?format=2500w);
	background-repeat: no-repeat;
	background-size: cover;

  .products{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }

}
</style>
