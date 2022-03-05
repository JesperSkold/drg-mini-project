<template>
	<div id="app">
		<NavBar v-if="$mq === 'lg' || $mq === 'md'"/>
		<Burger v-if="$mq === 'sm'"/>
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Burger from "@/components/BurgerMenu.vue"

export default{
	components:{
		NavBar,
		Burger,
		Footer
	}
}
</script>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
}

</style>
