import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name: "Home",
            component: Home
        },
         {
            path:"/Contact",
            name: "Contact",
            component: Contact
        },
         {
            path:"/Blog",
            name: "Blog",
            component: Blog
        }
    ]


})

export default router;