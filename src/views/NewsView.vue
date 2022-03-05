<template>
	<div class="wrapper">
		<div class="news-container">
			<h1>Latest space news</h1>
			<article v-for="article of articles" :key="article.id">
				<h2>{{ article.title }}</h2>
				<p>Published at {{ article.publishedAt }}</p>
				<p>Updated at {{ article.updatedAt }}</p>
				<p>
					<a :href="article.url">{{ article.url }}</a>
				</p>
				<figure>
					<img :src="article.imageUrl" alt="Image from article" />
					<figcaption class="news-container__summary">{{ article.summary }}</figcaption>
				</figure>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		articles() {
			return this.$store.state.articles;
		},
	},
	async mounted() {
		this.$store.dispatch("fetchArticles");
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	background-image: url(https://wallpapercave.com/wp/wp9630942.jpg);
	background-size: cover;
}
.news-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 5rem;
	background-color: rgba(0, 0, 0, 0.678);
	color: white;
}
.news-container img {
	width: inherit;
	height: auto;
}

.news-container h1 {
	font-family: "Space Mono";
	font-size: 3rem;
}
.news-container__summary {
	width: inherit;
	font-size: 1rem !important;
}

.news-container h2 {
	font-family: "Space Mono";
	width: inherit
}

.news-container p {
	margin: 0;
	font-size: 0.8rem;
}

.news-container figure {
	margin: 0;
	width: 50vw;
	background-color: rgba(5, 4, 92, 0.5);
	border: 2px solid rgb(6, 4, 92);
}

.news-container a {
	color: white;
}
</style>
