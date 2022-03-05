<template>
	<div>
		<img src="@/assets/burger.svg" alt="" srcset="" @click="openBurger" v-if="!openMenu" />
		<nav v-if="openMenu">
			<ul>
				<li class="close-btn" @click="openMenu = false">X</li>
				<router-link class="nav-link" to="/"><li>Home</li></router-link>
				<router-link class="nav-link" :to="{ name: 'NewsView' }"><li>News</li></router-link>
				<li>
					<router-link class="router-link" :to="{ name: 'CartView' }">
						<span class="material-icons"> shopping_cart </span><span class="quantity">{{ renderCartQuantity }}</span></router-link
					>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			openMenu: false,
		};
	},
	methods: {
		openBurger() {
			this.openMenu = !this.openMenu;
		},
	},
	computed: {
		renderCartQuantity() {
			return this.$store.getters.calcQuantity;
		},
	},
};
</script>

<style lang="scss" scoped>
.quantity {
	left: 5rem;
	position: absolute;
	width: 1rem;
	text-align: center;
	background: white;
	color: black;
	border-radius: 100%;
}
img {
  cursor: pointer;
	right: 1rem;
	width: 3rem;
	position: fixed;
}
nav {
	ul {
		right: 0;
		margin: 0;
		padding: 0;
		background: rgba(20, 13, 1, 0.596);
		position: fixed;
    border-radius: 20%;
    .close-btn{
      cursor: pointer;
      display: inline;
      margin-left: 8rem;
      font-size: 1.5rem;
    }
		li {
			list-style: none;
			color: white;
      text-align: center;
      margin-top: 1rem;
		}
	}
	a {
		cursor: pointer;
		color: white;
		text-decoration: none;
	}
}
</style>
