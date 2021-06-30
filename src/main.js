import { createApp } from 'vue'
import App from './App.vue'
import GiftPackVue from './components'

const app = createApp(App)

app.use(
    GiftPackVue,
    //{ useList: ['GpLayout'] } //options.userList
);

app.mount('#app')