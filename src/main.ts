import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'

/**
 * Styles
 */
import 'uno.css'
import './style.css'

/**
 * init app
 */
createApp(App)
	.use(router)
	.mount('#app')
