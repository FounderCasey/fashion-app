<template>
	<div>
		<div class="featured">
			<h2>Featured Ambassadors</h2>
		</div>
		<div class="container">
      <h3>Ambassadors</h3>
			<article v-for="(user, idx) in users" :key="idx">
        <img :src="user.image">
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
  
  img {
    border-radius: 100%;
    height: 250px;
    border: solid #909090;
  }
  
  .container {
    width: 75%;
    margin: auto;
    height: 54.9vh;
    overflow-y: scroll;
  }
  
  .container::-webkit-scrollbar {
    width: 0.4em;
  }
 
  .container::-webkit-scrollbar-track {
    background-color: #e8e8e8;
  }
 
  .container::-webkit-scrollbar-thumb {
    background-color: #52489C;
    outline: 1px solid slategrey;
    border-radius: 5px;
    padding: 15px 0px;
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