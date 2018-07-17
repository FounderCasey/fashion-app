<template>
	<div>
		<div class="featured">
			<h2 v-on:click="listAmbassadors">Featured Ambassadors</h2>
		</div>
		<div class="container">
			
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	
	export default {
		name: 'ambassadors',
		data () {
			return {
				name: '',
				userId: '',
				user: {}
			}
		},
		methods: {
			listAmbassadors: function() {
				function listAllUsers(nextPageToken) {
					// List batch of users, 1000 at a time.
					admin.auth().listUsers(1000, nextPageToken)
						.then(function(listUsersResult) {
							listUsersResult.users.forEach(function(userRecord) {
								console.log("user", userRecord.toJSON());
							});
							if (listUsersResult.pageToken) {
								// List next batch of users.
								listAllUsers(listUsersResult.pageToken)
							}
						})
						.catch(function(error) {
							console.log("Error listing users:", error);
						});
				}
				// Start listing users from the beginning, 1000 at a time.
				console.log(listAllUsers());
			}
		}
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
</style>