<template>
	<div>
		<div class="container">
			<div class="login">
				<h3>Sign in to OutfitJar</h3>
				<input type="text" v-model="email" placeholder="Email"><br>
				<input type="password" v-model="password" placeholder="Password"><br>
				<button v-on:click="signIn">Login</button>
				<p>Don't have an account?<router-link to="/signup"> Create one!</router-link></p>
				<hr/>
				<a href="#info">What is OutfitJar?</a>
			</div>
		</div>
		<div class="info-container" id="info">
			<h3> Info </h3>
			<a href="#">Top</a>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	
	export default {
		name: 'login',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signIn: function() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
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
  
  .container {
    background: #8179B7;
    height: 94.9vh;
    color: #FEFFFE;
    position: relative;
    overflow: hidden;
  }
  
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
  }
  
  h3 {
    padding: 15px 0px;
    margin: 0;
		font-size: 1.8rem;
  }
  
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
    color: #333;
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
		background-color: #52489C;
		border-radius: 5px;
		margin: 15px 0px 0px;
		color: #fbfbfb;
	}
	
	button:hover {
		background-color: #fefffe;
    color: #52489C;
		cursor: pointer;
	}
	
	a {
		text-decoration: none;
		color: #fefffe;
    font-weight: bold;
	}
	
	a:hover {
		color: #5f38cb;
	}
	
	.info-container {
		height: 100vh;
	}
	
	hr {
		height: 2px;
		background-color: #fefffe;
		border: none;
		outline: none;
		width: 150px;
		margin-bottom: 15px;
	}
	
</style>