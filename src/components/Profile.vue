<template>
	<div>
		<div class="hero">
			<div class="card">
				<img :src="user.image" v-on:click="changeImage" id="profileImage">
				<input id="fileUpload" type="file" hidden>
				<h1>{{ user.name }}</h1>
				<h3>{{ user.location }}</h3>
			</div>
		</div>
		<div class="container">
			<h3>About Me</h3>
		</div>
		<button v-on:click="logout">Logout</button>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import { db } from '../main'
	
	export default {
		name: 'profile',
		data: function() {
			return {
				user: []
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
			}
		},
	}
</script>

<style scoped="true">
	.hero {
		height: 40vh;
		width: 100%;
		background-color: #8179B7;
		position: relative;
	}
	
	.card {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.card img {
		height: 170px;
		border-radius: 100%;
		border: solid 2px #909090;
	}
	
	.card h1, h3 {
		margin: 0;
	}
</style>