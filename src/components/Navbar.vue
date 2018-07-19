<template>
	<div>
		<nav>
			<ul>
				<router-link class="link" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		data: function() {
			return {
				links: [
					{
						id: 0,
						text: 'Profile',
						page: '/profile'
					},
					{
						id: 1,
						text: 'Brands',
						page: '/brands'
					},
					{
						id: 2,
						text: 'Ambassadors',
						page: '/ambassadors'
					},
					{
						id: 3,
						text: 'OutfitJar',
						page: '/home'
					}
				]
			}
		}
	}
</script>

<style  scoped="true">
	nav {
    width: 100%; /* Full width */
	}
	
	ul {
		list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #FEFFFE;
		font-size: 1.2em;
		box-shadow: 0px 2px 1px rgba(168, 168, 168, 0.28);
	}
	
	.link {
		float: right;
		display: block;
    color: #52489C;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
	}
	
	.link:nth-child(4) {
		float: left;
	}
	
	.link:nth-child(4):hover {
		float: left;
		background-color: #FEFFFE;
	}
	
	.link:hover {
		background-color: #ebebeb;
	}
</style>