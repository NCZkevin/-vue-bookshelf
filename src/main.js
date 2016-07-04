import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import WildVue from "wildvue"
import Wildog from 'wildog'

Vue.use(Wildog)
Vue.use(VueResource)
Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter()

router.map({
  '/home': {
    components: App
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
