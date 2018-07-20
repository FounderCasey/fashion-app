<template>
	<div>
		<div class="featured">
			<h2>Featured Ambassadors</h2>
		</div>
		<div class="container">
      <h3>Ambassadors</h3>
			<article v-for="(user, idx) in users" :key="idx">
				<div class="image-cropper"><img :src="user.image"></div>
        <h1>{{ user.name }}</h1>
        <h3>{{ user.followers }} <i class="fas fa-users"></i></h3>
        <h3>{{ user.location }}</h3>
      </article>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	import { db } from '../main'
  
	export default {
		name: 'ambassadors',
		data () {
			return {
				users: []
			}
		},
    firestore() {
      return {
        users: db.collection('users')
      }
    },
	}
</script>

<style scoped="true">
  
	.featured {
		height: 40vh;
		width: 100%;
		background-color: #8179B7;
	}
	
	h2 {
		margin: 0;
		padding-top: 20px;
		color: #FEFFFE;
	}
	
	.image-cropper {
    width: 250px;
    height: 250px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
		border: solid 4px #fefffe;
	}

	img {
		display: inline;
		margin: auto;
		height: 130%;
		width: auto;
	}
  
  .container {
    width: 75%;
    margin: auto;
  }
  
  article {
    display: inline-block;
    margin: 15px 30px;
    padding: 5px;
    border-bottom: solid 4px #fefffe;
  }
  
  article:hover {
    border-bottom: solid 4px #52489C;
  }
	
	article:hover .image-cropper {
		border: solid 4px #52489C;
	}
  
  article h1 {
    margin: 5px 0px;
  }
  
  article h3 {
    color: #5b4c64;
    margin: 5px 0px;
    font-size: 1em;
  }
  
  i {
    font-size: 0.9em;
  }
  
</style>