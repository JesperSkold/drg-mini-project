<template>
	<nav :class="{ newsNav: newsNav }">
		<section>
			<h1>DRG All-in-One</h1>
			<p>A Page for Merchandise, News and Information about Hoxxes IV</p>
		</section>
		<ul>
			<router-link class="nav-link" to="/"><li>Home</li></router-link>
			<router-link class="nav-link" :to="{ name: 'NewsView' }"><li>News</li></router-link>
			<li>
				<router-link class="router-link" :to="{ name: 'CartView' }">
					<span class="material-icons"> shopping_cart </span><span class="quantity">{{ renderCartQuantity }}</span></router-link
				>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	computed: {
		renderCartQuantity() {
			return this.$store.getters.calcQuantity;
		},
	},
	data() {
		return {
			newsNav: false,
		};
	},
	watch: {
		$route(to) {
			if (to.path === "/news") {
				this.newsNav = true;
				console.log("news");
			} else {
				this.newsNav = false;
				console.log("home");
			}
		},
	},
	mounted() {
		if (this.$route.path === "/news") {
			this.newsNav = true;
		} else {
			this.newsNav = false;
		}
	},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
nav {
	background-color: rgba(92, 53, 8, 0.781);
	position: fixed;
	width: 100%;
	color: rgb(255, 255, 255);
	display: flex;
	justify-content: space-around;
}

nav h1 {
	font-family: "Space Mono";
	margin: 0;
	font-size: 3rem;
}

nav p {
	font-style: italic;
}

nav section {
	text-align: center;
	padding: 0.3rem;
}

nav ul {
	display: flex;
	align-items: center;
}

nav ul li {
	margin: 0rem 3rem;
	list-style: none;
}

.nav-link {
	color: white;
	text-decoration: none;
}

.router-link {
	color: white;
	position: relative;
}
.quantity {
	left: 0.8rem;
	position: absolute;
	width: 1rem;
	text-align: center;
	background: white;
	color: black;
	border-radius: 100%;
}
.newsNav {
	background-color: rgba(5, 4, 92, 0.5);
}
</style>
