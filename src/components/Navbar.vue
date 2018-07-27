<template>
	<div>
		<nav>
			<ul>
				<router-link class="link" :to="'/profile'">Profile</router-link>
				<router-link class="link" :to="'/brands'">Brands</router-link>
				<router-link class="link" :to="'/ambassadors'">Ambassadors</router-link>
				<router-link class="link image" :to="'/home'"><img src="../assets/logo-purple.png"></router-link>
				<router-link class="link special" :to="'/home'">B r a n d f l i</router-link>
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
						text: 'Brandfli',
						page: '/home'
					},
					{
						id: 4,
						text: 'Brandfli',
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
    padding: 20px 16px;
    text-decoration: none;
		font-weight: bold;
	}
	
	.link:hover {
		background-color: #ebebeb;
	}
	
	.special {
		float: left;
		padding: 20px 0px;
		letter-spacing: -2px;
		background-color: #FEFFFE;
	}
	
	.special:hover {
		float: left;
		background-color: #FEFFFE;
	}
	
	.image {
		float: left;
		padding: 2px 5px 2px 16px;
		background-color: #FEFFFE;
	}
	
	.image:hover {
		background-color: #FEFFFE;
	}
	
	img {
		height: 40px;
		padding-top: 10px;
	}
</style>