<template>
	<div>
		<div class="hero">
			<div class="card">
				<div class="image-cropper"><img :src="user.image" v-on:click="changeImage" id="profileImage"></div>
				<input id="fileUpload" type="file" hidden>
				<h1>{{ user.name }}</h1>
				<h3>{{ user.location }}</h3>
			</div>
		</div>
		<div class="container">
			<h3 v-on:click="showLightbox = !showLightbox">About Me</h3>
			<p id="aboutme">This is where your about me information will show up. Feel free to write about yourself and what you are looking for. Brands will read this.<br><em>To edit this, click 'About Me' above.</em></p>
		</div>
		<button v-on:click="logout">Logout</button>
		<div class="lightbox" v-show="showLightbox">
			<h2>Editing About Me</h2>
			<form>
				<textarea placeholder="Tell us about you..." id="textarea"></textarea>
				<br>
				<button v-on:click="changeAboutMe">Save</button>
				<br>
				<button id="cancel-btn" v-on:click="showLightbox = !showLightbox">Cancel</button>
			</form>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import { db } from '../main'
	
	export default {
		name: 'profile',
		data: function() {
			return {
				user: [],
				showLightbox: false,
				textarea: ''
			}
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
			changeImage: function() {
				var user = firebase.auth().currentUser
				var dbRef = db.collection("users").doc(user.uid);
				
				document.getElementById("fileUpload").click()

				var fileInput = document.getElementById('fileUpload');
				var fileDisplayArea = document.getElementById('profileImage');

				fileInput.addEventListener('change', function(e) {
					var file = fileInput.files[0];
					var imageType = /image.*/;

					if (file.type.match(imageType)) {
						var reader = new FileReader();

						reader.onload = function(e) {
							fileDisplayArea.innerHTML = "";

							var img = document.getElementById('profileImage');
							img.src = reader.result;
							
							return dbRef.update({
								image: reader.result
							})
						}
						reader.readAsDataURL(file);
					} else {
						alert("This file isn't an image, try again.")
					}
				});
			},
			showLightbox: function() {
				this.showLightbox = !this.showLightbox
			},
			changeAboutMe: function() {
				this.textarea = document.getElementById('textarea').value
				document.getElementById('aboutme').innerHTML = this.textarea
				this.showLightbox = !this.showLightbox
			}
		},
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
	
	.card .image-cropper {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
		border: solid 4px #fefffe;
	}

	.card img {
		display: inline;
		margin: auto;
		height: 150%;
		width: auto;
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