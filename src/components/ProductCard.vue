<template>
	<div class="product">
		<div class="product-image-container">
			<img :src="require(`../${productObj.img}`)" alt="" srcset="" />
		</div>
		<p class="name">{{ productObj.name }}</p>
		<p class="price">{{ productObj.price }} €</p>
		<button class="product-card__button" @click="addToCart">ADD TO CART</button>
	</div>
</template>

<script>
export default {
	props: {
		productObj: Object,
	},
	methods: {
		addToCart() {
			this.$store.dispatch("toCart", this.productObj);
		},
	},
};
</script>

<style lang="scss" scoped>
.product {
	border: solid 1px rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 5rem;
	background-color: rgba(44, 19, 8, 0.541);
}

.product-image-container {
	border-radius: 1rem 1rem 0rem 0rem;
	background-color: rgba(255, 187, 0, 0.712);
}

.product-image-container img {
	width: 12rem;
	padding: 2rem;
	height: 12rem;
}

.product-card__button {
	color: rgb(7, 5, 0);
	font-weight: 900;
	height: 3rem;
	border: none;
	border-radius: 0 0 1rem 1rem;
	background-color: rgba(255, 187, 0, 0.712);
}
.product-card__button:hover {
	background-color: rgba(221, 185, 25, 0.938);
	cursor: pointer;
}

@media (min-width: 650px) and (max-width: 1000px) {
	.product {
		margin: 10rem 2rem 2rem 2rem;
	}
}
@media (max-width: 650px) {
	.product {
		margin: 1rem;
		width: 8rem;
		p{
			height: 2rem;
		}
	}
	.product-image-container img {
		width: 4rem;
		height: 5rem;
	}
}
</style>
