import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//Component Global Registration
const ctx = require.context('./components', true, /\.vue$/);

ctx.keys().forEach(key => {
    const regInfo = key.match(/\/(\w+)\.vue/);
    const comName = regInfo?regInfo[1]:null;
    if(comName){
        app.component(comName, ctx(key).default);
        console.log('[vue-cli main] Global Component Name:('+comName+') Registered.');
    }
});

app.mount('#app')