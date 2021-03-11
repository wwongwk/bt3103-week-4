import Home from './components/Home.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard'

export default [
    { path: '/', name: "Home", component: Home },
    { path: '/orders', name : "Orders", component: Orders },
    { path: '/modify', name : "Modify", component: Modify, props: true },
    { path: '/dashboard', name : "Dashboard", component: Dashboard}
]