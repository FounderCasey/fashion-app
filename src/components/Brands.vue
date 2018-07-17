<template>
	<div>
		<div class="featured">
			<h2>Featured Brands</h2>
		</div>
		<div class="container">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'brands',
		data () {
			return {
				name: '',
				userId: '',
				user: {}
			}
		},
	}
</script>

<style scoped="true">
	
	.featured {
		height: 40vh;
		width: 100%;
		background-color: #8179B7;
	}
	
	h2 {
		margin: 0;
		padding-top: 20px;
		color: #FEFFFE;
	}
	
</style>