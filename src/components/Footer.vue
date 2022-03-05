<template>
	<footer :class="{ newsFooter: newsFooter }">
		<ul>
			<h2>ABOUT</h2>
			<router-link to="/"><li>Home</li></router-link>
			<li>Contact Us</li>
			<li>FAQs</li>
		</ul>
		<ul>
			<h2>PRODUCT</h2>
			<li>Testimonials</li>
			<li>How it Works</li>
			<li>Member Discounts</li>
		</ul>
		<div class="socials">
			<img src="@/assets/facebook.svg" alt="facebook icon" />
			<img src="@/assets/instagram.svg" alt="instagram icon" />
			<img src="@/assets/twitter.svg" alt="twitter icon" />
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			newsFooter: false,
		};
	},
	watch: {
		$route(to) {
			if (to.path === "/news") {
				this.newsFooter = true;
			} else {
				this.newsFooter = false;
			}
		},
	},
	mounted() {
		if (this.$route.path === "/news") {
			this.newsFooter = true;
		} else {
			this.newsFooter = false;
		}
	},
};
</script>

<style lang="scss" scoped>
.newsFooter {
	background-color: rgba(5, 4, 92, 0.911);
}
footer {
	display: flex;
	justify-content: space-around;
	background-color: rgba(92, 53, 8, 0.781);
	ul {
		padding: 0;
		color: white;
		a {
			text-decoration: none;
			color: white;
		}
		li {
			margin-top: 1rem;
			list-style: none;
			cursor: pointer;
		}
	}
	.socials {
		width: 20vw;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		img {
			cursor: pointer;
			width: 4rem;
		}
	}
}
@media (max-width: 360px) {
	footer {
		text-align: center;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.socials img{
		margin: 1rem 1rem;
	}
}
</style>
