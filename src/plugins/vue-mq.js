import Vue from 'vue'
import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 652,
    md: 1250,
    lg: Infinity,
  }
})