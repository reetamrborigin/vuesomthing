import Signup from './components/Signup.vue';
import Home from './components/Home.vue';
import UpdateE from './components/Update.vue';
import {createRouter,createWebHistory} from 'vue-router';

const routes=[
    {
        name:"HomeE",
        path:"/",
        component: Home
    },
    {
        name:"Signup",
        path:"/signup",
        component: Signup
    },
    {
        name:"UpdateE",
        path:"/update/:id",
        component: UpdateE
    },

]


const router = createRouter({
    history:createWebHistory(),routes
})

export default router;