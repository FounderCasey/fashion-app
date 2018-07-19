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
			<div class="wrapper">
				<h3>OutfitJar</h3>
				<h4>We connect Brands and Ambassadors.</h4>
				<p>This is where OutfitJar comes to the rescue. We list brands that are looking for <em>you</em>. It's simple enough. Sign up and start browsing brands.</p>
				<div class="icon">
					<i class="fas fa-search"></i>
					<p>Search for Brands</p>
				</div>
				<div class="icon icon-middle">
					<i class="fas fa-comments"></i>
					<p>Talk to Brands</p>
				</div>
				<div class="icon">
					<i class="fas fa-user-plus"></i>
					<p>Gain Followers</p>
				</div>
				<br>
				<a href="#" id="login-link">Login</a>
			</div>
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
	
	h4 {
		font-size: 1.3rem;
		margin: 5px 0px;
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
	
	hr {
		height: 2px;
		background-color: #fefffe;
		border: none;
		outline: none;
		width: 150px;
		margin-bottom: 15px;
    border-radius: 10px;
	}
  
  #login-link {
    color: #52489C;
		font-size: 2em;
	}
	
	#login-link:hover {
		color: #332979;
	}
	
	.wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fefffe;
		border-radius: 10px;
		padding: 25px;
		box-shadow: 3px 3px 10px rgba(64, 64, 64, 0.2);
		animation: shadowbounce 3s;
		-webkit-animation: shadowbounce 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}
	
	.wrapper h3 {
		margin: 0;
		padding: 0;
	}
	
	.icon {
		display: inline-block;
		padding: 25px 25px;
	}
	
	.icon i {
		font-size: 1.5em;
	}
	
	.icon p {
		font-weight: bolder;
	}
	
	@keyframes shadowbounce {
		0%   { box-shadow: 3px 3px 10px rgba(64, 64, 64, 0.2); }
		50%  { box-shadow: 5px 10px 10px rgba(64, 64, 64, 0.2); }
		100%  { box-shadow: 3px 3px 10px rgba(64, 64, 64, 0.2); }
	}
	
	.info-container {
		animation: colorchange 10s;
		-webkit-animation: colorchange 10s;
		animation-iteration-count: infinite;
		height: 100vh;
		position: relative;
	}

	@keyframes colorchange {
		0%   { background: #c7c3e5; }
		25%  { background: #aaa2e5; }
		50%  { background: #b79fe3; }
		75%  { background: #ad9ec9; }
		100% { background: #c7c3e5; }
	}

	@-webkit-keyframes colorchange {
		0%   { background: #c7c3e5; }
		25%  { background: #aaa2e5; }
		50%  { background: #b79fe3; }
		75%  { background: #ad9ec9; }
		100% { background: #c7c3e5; }
	}
	
</style>