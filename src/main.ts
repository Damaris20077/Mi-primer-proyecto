import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/ionic.bundle.css'

import { createPinia } from 'pinia'

const app = createApp(App)

app.use(IonicVue)
app.use(router)

const pinia = createPinia()
app.use(pinia)

router.isReady().then(() => {
  app.mount('#app')
})