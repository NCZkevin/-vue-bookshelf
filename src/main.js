import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

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
