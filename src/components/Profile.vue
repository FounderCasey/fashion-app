<template>
	<div class="hero">
		<h2>Hey there, {{ name || "welcome"}}!</h2>
		<button v-on:click="logout">Logout</button>
	</div>
</template>

<script>
	import firebase from 'firebase';
	
	export default {
		name: 'homepage',
		data: function() {
			return {
				name: '',
				userId: '',
				user: {}
			}
		},
		methods: {
			logout: function() {
				firebase.auth().signOut().then(() => {
					this.$router.replace('login')
				})
			},
			getName: function() {
				var user = firebase.auth().currentUser
				if (user) {
					this.name = user.displayName
				}
			}
		},
		created() {
			this.getName();
		}
	}
</script>

<style  scoped="true">

</style>