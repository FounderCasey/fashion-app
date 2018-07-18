// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import VueFire from 'vuefire'

Vue.config.productionTip = false

let app;
var config = {
    apiKey: "AIzaSyCe9XBQMXVqc9PAVPfAeyrXezYCLQDZfUY",
    authDomain: "fashion-app-992cd.firebaseapp.com",
    databaseURL: "https://fashion-app-992cd.firebaseio.com",
    projectId: "fashion-app-992cd",
    storageBucket: "fashion-app-992cd.appspot.com",
    messagingSenderId: "577249385254",
};

const settings = {
  timestampsInSnapshots: true
}

Vue.use(VueFire)

firebase.initializeApp(config)
const firestore = firebase.firestore();
firestore.settings(settings);
export const db = firestore

firebase.auth().onAuthStateChanged(function(user) {
	
	if (!app) {
		app = new Vue({
			el: '#app',
			router,
			components: { App },
			template: '<App/>'
		})
	}
})
