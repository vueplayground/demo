import '@/index.css'
import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/logic/router'
import { plugin as metaPlugin } from 'vue-meta'

const app = createApp(App)

app.use(router)
app.use(metaPlugin)

app.mount('#app')