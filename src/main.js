import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

document.addEventListener('scroll', () => {
  document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  document.body.mozRequestFullScreen();
  document.body.msRequestFullscreen();
  document.body.requestFullscreen(); // standard
});

createApp(App).use(router).mount('#app');
