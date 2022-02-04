<template>
	<nav>
		<section>
			<h1>DRG All-in-One</h1>
			<p>A Page for Merchandise, News and Information about Hoxxes IV</p>
		</section>
		<ul>
			<li>Shipping</li>
			<li>Contact</li>
			<li>FAQ</li>
			<li>
				<router-link :to="{name: 'CartView'}"> <span class="material-icons"> shopping_cart </span></router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
nav {
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
</style>
