import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// new Vue({

// }).$mount('#app')
//   == 
// new Vue({
//   el: '#app'
// })

// new Vue({
//   // render: h => h(App),
//   components: {
//     'app': App
//   }
// }).$mount('#app')
