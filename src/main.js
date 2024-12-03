import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

import { SpinningText } from './Three/SpinningText.js'
function create3D() {
    const textContainer = document.querySelector('#spinning-text')
    new SpinningText(textContainer, '</>', {
        size: 30,
        depth: 5,
        curveSegments: 4,
        bevelThickness: 0
    })
}
create3D()