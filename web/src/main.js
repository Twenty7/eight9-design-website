

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

/* Bootstrap */
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/custom.scss'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faCameraRetro, faBook, faPhone, faEnvelope, faBars, faLocationDot, faAtom, faScrewdriverWrench, faStar, faCheck, faList, faAt, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faCameraRetro, faBook, faPhone, faEnvelope, faBars, faLocationDot, faAtom, faScrewdriverWrench, faStar, faCheck, faList, faAt, faQuestion, faUser );

/* Initialize */
const app = createApp(App)
app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
