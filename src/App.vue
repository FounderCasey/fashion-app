<template>
  <div id="app">
		<Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
	import Navbar from './components/Navbar'
	
	export default {
		name: 'App',
		components: {
			'Navbar': Navbar
		}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
	width: 100%;
}
</style>
