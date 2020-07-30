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
const Details = () =>
    import ("../views/Home/HomeDetail/HomeDetails.vue");
const Issue = () =>
    import ("../views/Mood/MoodIssue/MoodIssues.vue");
const PinLunMain = () =>
    import ("../views/Mood/PinLun/PinLunMain.vue");
const HuiFu = () =>
    import ("../views/Mood/PinLun/HuiFus/HuiFu.vue");

Vue.use(VueRouter);

const routes = [{
        path: '/mood/pinlun/huifu',
        name: 'HuiFu',
        component: HuiFu
    },
    {
        path: '/mood/pinlun',
        name: 'Pinlun',
        component: PinLunMain
    },
    {
        path: '/issue',
        name: 'Issue',
        component: Issue
    },
    {
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
        component: Mood,
        // children: [{
        //     path: 'pinlun',
        //     component: PinLunMain
        // }]
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
    },
    {
        path: "/detail",
        name: "HomeDetail",
        component: Details
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