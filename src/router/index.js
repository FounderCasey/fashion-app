import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Homepage from '@/components/Homepage'
import Brands from '@/components/Brands'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import BrandSignup from '@/components/BrandSignup'
import Ambassadors from '@/components/Ambassadors'
import Profile from '@/components/Profile'

Vue.use(Router)

let router = new Router({
  routes: [
		{
      path: '*',
      redirect: '/login'
    },
		{
      path: '/',
      redirect: '/login'
    },
		{
			path: '/login',
      name: 'Login',
      component: Login
		},
		{
			path: '/signup',
      name: 'SignUp',
      component: SignUp
		},
    {
			path: '/brandsignup',
      name: 'BrandSignup',
      component: BrandSignup
		},
		{
      path: '/home',
      name: 'Homepage',
      component: Homepage,
			meta: {
				requiresAuth: true
			}
    },
		{
      path: '/brands',
      name: 'Brands',
      component: Brands,
			meta: {
				requiresAuth: true
			}
    },
		{
      path: '/ambassadors',
      name: 'Ambassadors',
      component: Ambassadors,
			meta: {
				requiresAuth: true
			}
    },
		{
      path: '/profile',
      name: 'Profile',
      component: Profile,
			meta: {
				requiresAuth: true
			}
    }
  ]
})

router.beforeEach((to, from, next) => {
	let currentUser = firebase.auth().currentUser;
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	
	if (requiresAuth && !currentUser) next('login')
	else if (!requiresAuth && currentUser) next('home')
	else next()
})

export default router
