import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Initialize EmailJS
if (typeof emailjs !== "undefined") {
  emailjs.init("8Oac1gclz1MihcVxE")
} else {
  console.error("EmailJS is not loaded. Ensure it is properly included in your HTML.")
}

const app = createApp(App)
app.mount('#app') 