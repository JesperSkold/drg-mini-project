<template>
	<div class="home">
		<div class="products">
      <article v-for="product in products" :key="product.name"><ProductCard :productObj="product"/></article>
    </div>
    <router-view name: CartView></router-view>
	</div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
	name: "Home",
	components: {
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
	padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  }
}
@media (max-width: 1000px){
	.home{
		.products{
			padding: unset;
		}
	}
}
@media (max-width: 650px){
	.home{
		.products{
			display: flex;
		}
	}
}
</style>
