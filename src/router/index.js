import Vue from "vue";
import VueRouter from "vue-router";
// import TabBar from "components/tabbar/TabBar";
const Home = () =>
    import ('../views/Home/Home.vue');
const Mood = () =>
    import ('../views/Mood/Mood.vue');
const Serve = () =>
    import ('../views/Serve/Serve.vue');
const Profile = () =>
    import ('../views/Profile/Profile.vue');
const Search = () =>
    import ("../views/Home/HomeSearch/SearchPage.vue");
const PlaneInfo = () =>
    import ("../views/Home/HomeInfo/HomeInfos.vue");

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/mood",
        name: "Mood",
        component: Mood
    },
    {
        path: "/serve",
        name: "Serve",
        component: Serve
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    },
    {
        path: "/info",
        name: "HomeInfo",
        component: PlaneInfo
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default router;