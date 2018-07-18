<template>
	<div>
		<div class="featured">
			<h2>Featured Brands</h2>
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