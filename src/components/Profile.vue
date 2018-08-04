<template>
	<div>
		<div class="hero">
			<div class="card">
				<img :src="user.image" v-on:click="showUpload" id="profileImage">
				<h1>{{ user.name }}</h1>
				<h3>{{ user.location }}</h3>
			</div>
		</div>
		<div class="container">
			<h3 v-on:click="showLb = !showLb">About Me</h3>
			<p id="aboutme">{{ user.about || "This is where your about me information will show up. Feel free to write about yourself and what you are looking for. Brands will read this. To edit this, click 'About Me' above." }}</p>
			
			<my-upload field="img"
				langType="en"
				@crop-success="cropSuccess"
				v-model="showMU"
				:width="300"
				:height="300"
				:noSquare="true"
				img-format="png">
			</my-upload>
		</div>
		<button v-on:click="logout">Logout</button>
		<div class="lightbox" v-show="showLb">
			<h2>Editing About Me</h2>
			<form>
				<textarea placeholder="Tell us about you..." id="textarea"></textarea>
				<br>
				<button v-on:click="changeAboutMe">Save</button>
				<br>
				<button id="cancel-btn" v-on:click="showLb = !showLb">Cancel</button>
			</form>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import { db } from '../main'
	import myUpload from 'vue-image-crop-upload'
	
	export default {
		name: 'profile',
		data: function() {
			return {
				user: [],
				showLb: false,
				showMU: false,
				textarea: ''
			}
		},
		components: {
			'my-upload': myUpload
		},
		firestore() {
			var user = firebase.auth().currentUser
			
			return {
					user: db.collection('users').doc(user.uid)
				}
    },
		methods: {
			logout: function() {
				console.log(this.name)
				firebase.auth().signOut().then(() => {
					this.$router.replace('login')
				})
			},
			showLightbox: function() {
				this.showLb = !this.showLb
			},
			showUpload: function() {
				this.showMU = !this.showMU
			},
			changeAboutMe: function() {
				var user = firebase.auth().currentUser
				var userRef = db.collection("users").doc(user.uid);
				
				this.textarea = document.getElementById('textarea').value
				document.getElementById('aboutme').innerHTML = this.textarea
				
				return userRef.update({
					about: this.textarea
				})
			},
			cropSuccess(imgDataUrl, field) {
				var user = firebase.auth().currentUser
				var userRef = db.collection("users").doc(user.uid);
				
				var img = document.getElementById('profileImage');
				img.src = imgDataUrl;
				
				return userRef.update({
					image: imgDataUrl
				})
			}
		}
	}
</script>

<style scoped="true">
	.hero {
		height: 300px;
		width: 100%;
		background-color: #8179B7;
		position: relative;
	}
	
	.container {
    width: 75%;
    margin: auto;
  }
	
	.card {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.card img {
		width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
		border: solid 4px #fefffe;
	}
	
	.card h1, h3 {
		margin: 0;
	}
	
	.lightbox {
		width: 500px;
		height: auto;
		background: #52489C;
		color: #FEFFFE;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 5px;
	}
	
	textarea {
		width: 90%;
		height: 200px;
		border: none;
		outline: none;
		resize: none;
		font-size: 1.2em;
		text-indent: 10px;
		margin: 0;
		border-radius: 5px;
		color: #333;
	}
  
  #aboutme {
    width: 60%;
    margin: auto;
  }
	
	button {
		width: 250px;
		height: 45px;
		font-size: 1.2rem;
		border: none;
		outline: none;
		background-color: #8179B7;
		border-radius: 5px;
		margin: 20px 0px 0px;
		color: #fefffe;
	}
	
	button:hover {
		background-color: #fefffe;
    color: #8179B7;
		cursor: pointer;
	}
	
	#cancel-btn {
		background-color: #52489C;
		color: #ff5e5b;
		font-size: 1em;
		margin: 0px 0px 0px;
	}
	
	#cancel-btn:hover {
		color: #cb4341;
	}
</style>