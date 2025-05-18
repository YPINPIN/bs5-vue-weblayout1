// Import our custom CSS
import './assets/scss/styles.scss';
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
