<template>
	<div class="signup">
		<h3>Sign Up for Fashion App</h3>
		<input type="text" v-model="name" placeholder="Display Name"><br>
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button v-on:click="signUp">Sign Up</button>
		<p>Already have an account? <router-link to="/login">Sign In!</router-link></p>
	</div>
</template>

<script>
	import firebase from 'firebase'
	
	export default {
		name: 'signup',
		data: function() {
			return {
				name: '',
				email: '',
				password: ''
			}
		},
		methods: {
			signUp: function() {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						var updateUser = firebase.auth().currentUser;
						updateUser.updateProfile({
							displayName: this.name,
						})
						this.$router.replace('home')
					},
					(err) => {
						alert("Yikes, " + err.message)
					}
				);
			}
		}
	}
</script>

<style scoped="true">
	input {
		width: 300px;
		height: 30px;
		border: none;
		outline: none;
		background-color: #fbfbfb;
		margin: 5px 0px;
		padding: 10px;
		border-radius: 5px;
		font-size: 1.2rem;
	}
	
	input:focus {
		box-shadow: 0 0 0 2pt rgba(149, 96, 211, 0.44);
	}
	
	button {
		width: 250px;
		height: 45px;
		font-size: 1.2rem;
		border: none;
		outline: none;
		background-color: #8663e5;
		border-radius: 5px;
		margin: 5px 0px;
		color: #fbfbfb;
	}
	
	button:hover {
		background-color: #6540c9;
		cursor: pointer;
	}
	
	a {
		text-decoration: none;
		color: #8663e5;
	}
	
	a:hover {
		color: #5f38cb;
	}
	
</style>