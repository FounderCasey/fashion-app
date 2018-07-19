<template>
  <div class="container">
    <div class="signup">
      <h3>Sign Up for OutfitJar</h3>
      <input type="text" v-model="name" placeholder="Display Name"><br>
      <input type="text" v-model="location" placeholder="Location"><br>
      <input type="text" v-model="followers" placeholder="Number of followers"><br>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button v-on:click="addUser(); signUp();">Sign Up</button>
      <p>Already have an account? <router-link to="/login">Sign In!</router-link></p>
    </div>
  </div>
</template>

<script>
	import firebase from 'firebase'
	import { db } from '../main'
  
	export default {
		name: 'signup',
		data: function() {
			return {
				name: '',
        location: '',
        followers: '',
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
			},
      addUser: function() {
        db.collection("users").doc(this.email).set({
          name: this.name,
          followers: this.followers,
          location: this.location,
          image: "https://i.imgur.com/5wbDlUQ.png"
        })
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
  
  .signup {
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
	
</style>