import { createRouter, createWebHistory } from "vue-router";
import AppMain from "../pages/AppMain";

const routes = [
    {
        path: "/",
        name: "AppMain",
        component: AppMain,
    },
    {
        path: "/success",
        name: "AppSuccess",
        component: () => import(/* webpackChunkName: "AppSuccess" */ "../pages/AppSuccess"),
    },
    {
        path: "/error",
        name: "AppError",

        component: () => import(/* webpackChunkName: "AppError" */ "../pages/AppError"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
