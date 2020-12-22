// import VueRouter from 'vue-router';
import Home from './Views/Home';
import About from './Views/About';
import SignIn from './Views/SignInFlow/SignIn.vue';
import Request from './Views/SignInFlow/Request.vue';
import Recover from './Views/SignInFlow/Recover.vue';


// const routes = [
//     {
//         path: "/",
//         component: Home,
//         name: "home",
//     },

// ];

// const router = new VueRouter({
//     routes,
//     mode: "history",
// });

// export default router;

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        },
        {
            path: '/signin',
            component: SignIn,
            name: 'signin'
        },
        {
            path: '/request',
            component: Request,
            name: 'request'
        },
        {
            path: '/recover',
            component: Recover,
            name: 'recover'
        },
    ]
};
