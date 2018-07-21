<template>
	<div>
		<div class="featured">
			<div class="centered-content">
				<h2>Featured Brands</h2>
					<div class="featured-brands">
						<article v-for="(brand, idx) in brands" :key="idx" class="featured-article">
							<img :src="brand.image" class="featured-img">
						</article>
					</div>
			</div>
		</div>
		<div class="container">
			<h3>Brands</h3>
			<article v-for="(brand, idx) in brands" :key="idx">
				<img :src="brand.image">
        <h1>{{ brand.name }}</h1>
        <h3>{{ brand.location }}</h3>
      </article>
		</div>
	</div>
</template>

<script>
  import firebase from 'firebase'
  import { db } from '../main'
  
	export default {
		name: 'brands',
		data () {
			return {
				brands: []
			}
		},
    firestore() {
      return {
        brands: db.collection('brands')
      }
    },
	}
</script>

<style scoped="true">
	
	.featured {
		height: 40vh;
		width: 100%;
		background-color: #8179B7;
		position: relative;
	}
	
	h2 {
		margin: 0;
		padding-top: 10px;
		color: #FEFFFE;
	}
	
	.centered-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}

	img {
		border-radius: 50%;
		border: solid 4px #FEFFFE;
		height: 250px;
	}
	
	img:hover {
		border: solid 4px #52489C;
	}
	
	.featured-img {
		border-radius: 50%;
		border: solid 4px #8179B7;
		height: 200px;
	}
	
	.featured-img:hover {
		border: solid 4px #FEFFFE;
	}
  
  .container {
    width: 75%;
    margin: auto;
  }
	
	.featured-brands {
		width: 75%;
		height: 300px;;
		margin: auto;
		overflow-x: scroll;
  	overflow-y: hidden;
  	white-space: nowrap;
	}
  
	.featured-article {
		display: inline-block;
    margin: 15px 30px;
    padding: 5px;
    border-bottom: solid 4px #8179B7;
	}
	
	.featured-article:hover {
		border-bottom: solid 4px #8179B7;
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