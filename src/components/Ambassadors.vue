<template>
	<div>
		<div class="featured">
			<div class="centered-content">
				<h2>Featured Ambassadors</h2>
					<div class="featured-users">
						<article v-for="(user, idx) in premium" :key="idx" class="featured-article">
							<img :src="user.image" class="featured-img">
							<div class="hover-text">
								<h3>{{user.name}}</h3>
								<h4>{{user.followers}} <i class="fas fa-users"></i></h4>
								<h4>{{user.location}}</h4>
							</div>
						</article>
					</div>
			</div>
		</div>
		<div class="container">
      <h3>Ambassadors</h3>
			<article v-for="(user, idx) in users" :key="idx" class="article">
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
				users: [],
				premium: []
			}
		},
    firestore() {
      return {
        users: db.collection('users'),
				premium: db.collection('users').where("premium", "==", true)
      }
    },
	}
</script>

<style scoped="true">
  
	.featured {
		height: 300px;
		width: 100%;
		background-color: #8179B7;
		position: relative;
	}
	
	h2 {
		margin: 0;
		color: #FEFFFE;
	}

	img {
		width: 250px;
    height: 250px;
    position: relative;
    overflow: hidden;
    border-radius: 100%;
		border: solid 4px #fefffe;
	}
	
	/****    Featured    ****/
	
	.centered-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
	
	.featured-img {
		width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 100%;
		border: solid 4px #fefffe;
	}
	
	.featured-img:hover {
		border: solid 4px #FEFFFE;
	}
	
	.featured-users {
		width: 75%;
		height: 250px;
		margin: auto;
		overflow-x: scroll;
  	overflow-y: hidden;
  	white-space: nowrap;
	}
	
  .featured-users::-webkit-scrollbar {
    height: 5px;
    border-radius: 5px;
		margin: 0;
  }

  .featured-users::-webkit-scrollbar-track {
    background: #8179B7;
    border-radius: 5px;
  }

  .featured-users::-webkit-scrollbar-thumb {
    background: #52489C; 
    border-radius: 5px;
  }

  .featured-users::-webkit-scrollbar-thumb:hover {
    background: #FEFFFE; 
  }
  
	.featured-article {
		display: inline-block;
    margin: 15px 30px;
		padding: 5px;
		position: relative;
		border-radius: 100%;
	}
	
	.hover-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: .5s ease;
		opacity: 0;
		text-align: center;
		font-size: 1.75em;
		font-weight: bold;
		color: #FEFFFE;
	}
	
	.hover-text h3 {
		font-size: 1em;
		margin: 0px;
	}
	
	.hover-text h4 {
		font-size: 0.5em;
		margin: 0px;
	}
	
	.featured-article:hover .featured-img {
		opacity: 0.2;
	}
	
	.featured-article:hover .hover-text {
		opacity: 1;
	}
	
	/****   Normal   ****/
  
  .container {
    width: 75%;
    margin: auto;
  }
  
  .article {
    display: inline-block;
    margin: 15px 30px;
    padding: 5px;
    border-bottom: solid 4px #fefffe;
  }
  
  .article:hover {
    border-bottom: solid 4px #52489C;
  }
	
	.article:hover img {
		border: solid 4px #52489C;
	}
  
  .article h1 {
    margin: 5px 0px;
  }
  
  .article h3 {
    color: #5b4c64;
    margin: 5px 0px;
    font-size: 1em;
  }
  
  i {
    font-size: 0.9em;
  }
  
</style>