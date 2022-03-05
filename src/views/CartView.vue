<template>
	<ul class="cart-view" :class="{mobileCart: $mq === 'sm'}">
		<router-link class="router-link" to="/"><span class="material-icons close"> close </span></router-link>
		<li v-for="cartItem of renderCartItems" :key="cartItem.name">
			<p>{{ cartItem.name }}</p>
			<div class="controls">
				<button class="decrease" @click="decrease(cartItem)">-</button>
				<span>{{ cartItem.amount }}</span>
				<button class="increase" @click="increase(cartItem)">+</button>
			</div>
		</li>
		<p class="quantity">{{ renderCartQuantity }} items in cart</p>
		<p class="total">Total: {{ renderCartTotal }} €</p>
	</ul>
</template>

<script>
export default {
	name: "CartView",
	computed: {
		renderCartItems() {
			return this.$store.state.cart;
		},
		renderCartTotal() {
			return this.$store.getters.calcTotalCart;
		},
		renderCartQuantity() {
			return this.$store.getters.calcQuantity;
		},
	},
	methods: {
		decrease(cartItem) {
			this.$store.dispatch("decrease", cartItem);
		},
		increase(cartItem) {
			this.$store.dispatch("increase", cartItem);
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.mobileCart{
	height: 50vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	width: 27vw;
	text-align: center;
}

.router-link {
	color: white;
	text-decoration: none;
}
.quantity {
	text-align: center;
	margin: 1rem;
}
li {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0.5rem;
	span {
		text-align: center;
		display: inline-block;
		width: 1.2rem;
		color: black;
		background-color: white;
	}
}

.cart-view {
	padding: 1rem;
	position: fixed;
	top: 5rem;
	left: 0.5rem;
	color: white;
	background-color: rgba(0, 0, 0, 0.767);
	border: solid 1px rgb(200, 175, 29);
}
.total {
	text-align: center;
}

li p {
	text-align: center;
	width: 10rem;
	border-bottom: 1px white solid;
	margin-right: 0.5rem;
	list-style: none;
}

.controls button {
	font-size: 1.1rem;
	margin: 0.2rem;
}

.close-view {
	display: inline-flex;
	margin: 5% 0 0 88%;
	cursor: pointer;
	color: white;
}

.close-view img {
	height: 1.5rem;
	width: 1.5rem;
}

.open-view {
	display: inline-flex;
	margin: 5% 0 0 90%;
	cursor: pointer;
	color: white;
}

.open-view img {
	height: 2rem;
	width: 2rem;
}
.close {
	margin: auto 0 auto auto;
	width: 1rem;
	display: block;
	cursor: pointer;
	user-select: none;
}
</style>
