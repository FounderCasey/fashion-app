<template>
	<div>
		<div class="featured">
			<div class="centered-content">
				<h2>Featured Brands</h2>
					<div class="featured-brands">
						<article v-for="(brand, idx) in premium" :key="idx" class="featured-article" v-if="brand.brand === true">
							<div id="image-wrapper"><img :src="brand.image" class="featured-img">
								<div class="hover-text">
									<h3>{{brand.name}}</h3>
									<h4>{{brand.location}}</h4>
								</div>
							</div>
						</article>
					</div>
			</div>
		</div>
		<div class="container">
			<h3>Brands</h3>
			<article v-for="(brand, idx) in brands" :key="idx" class="article">
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
				brands: [],
				premium: []
			}
		},
    firestore() {
      return {
        brands: db.collection('users').where("brand", "==", true),
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
		border-radius: 50%;
		border: solid 4px #FEFFFE;
		height: 250px;
	}
	
	img:hover {
		border: solid 4px #52489C;
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
		border-radius: 50%;
		border: solid 4px #8179B7;
		height: 200px;
		transition: 0.5s ease;
	}
	
	.featured-img:hover {
		border: solid 4px #8179B7;
	}
	
	.featured-brands {
		width: 75%;
		height: 250px;
		margin: auto;
		overflow-x: scroll;
  	overflow-y: hidden;
  	white-space: nowrap;
	}
	
  .featured-brands::-webkit-scrollbar {
    height: 5px;
    border-radius: 5px;
		margin: 0;
  }

  .featured-brands::-webkit-scrollbar-track {
    background: #8179B7;
    border-radius: 5px;
  }

  .featured-brands::-webkit-scrollbar-thumb {
    background: #52489C; 
    border-radius: 5px;
  }

  .featured-brands::-webkit-scrollbar-thumb:hover {
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
		font-size: 0.75em;
		margin: 0px;
	}
	
	.featured-article:hover .featured-img {
		opacity: 0.2;
	}
	
	.featured-article:hover .hover-text {
		opacity: 1;
	}
	/****    Normal    ****/
	
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