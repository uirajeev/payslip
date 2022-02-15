import { createApp } from 'vue'
import App from './App.vue'
import Tooltip from './components/atoms/Tooltip/Tooltip.vue'
import i18n from './i18n'

createApp(App).component('Tooltip', Tooltip).use(i18n).mount('#app')
