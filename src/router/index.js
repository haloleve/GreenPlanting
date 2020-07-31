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
const Menu = () =>
    import ("../views/Home/HomeMenus/HomeMenu.vue");
const HomeAll = () =>
    import ("../views/Home/HomeAll.vue");
const HHZZ = () =>
    import ("../views/Home/HomePage/HFZZ.vue");
const SGZZ = () =>
    import ("../views/Home/HomePage/SGZZ.vue");
const SCZWZZ = () =>
    import ("../views/Home/HomePage/SCZWZZ.vue");
const GSZWZZ = () =>
    import ("../views/Home/HomePage/GSZWZZ.vue");
const LSZWZZ = () =>
    import ("../views/Home/HomePage/LSZWZZ.vue");
const XWZWZZ = () =>
    import ("../views/Home/HomePage/XWZWZZ.vue");
const YKZWZZ = () =>
    import ("../views/Home/HomePage/YKZWZZ.vue");
const YLZWZZ = () =>
    import ("../views/Home/HomePage/YLZWZZ.vue");
const YYZWZZ = () =>
    import ("../views/Home/HomePage/YYZWZZ.vue");

Vue.use(VueRouter);

const routes = [{
        path: "/home/menu",
        name: "Menu",
        component: Menu
    },
    {
        path: "/mood/pinlun/huifu",
        name: "HuiFu",
        component: HuiFu
    },
    {
        path: "/mood/pinlun",
        name: "Pinlun",
        component: PinLunMain
    },
    {
        path: "/issue",
        name: "Issue",
        component: Issue
    },
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        children: [{
                path: "/",
                component: HomeAll
            },
            {
                path: "hhzz",
                component: HHZZ
            },
            {
                path: "sgzz",
                component: SGZZ
            },
            {
                path: "sczwzz",
                component: SCZWZZ
            },
            {
                path: "gszwzz",
                component: GSZWZZ
            },
            {
                path: "lszwzz",
                component: LSZWZZ
            },
            {
                path: "xwzwzz",
                component: XWZWZZ
            },
            {
                path: "ykzwzz",
                component: YKZWZZ
            },
            {
                path: "ylzwzz",
                component: YLZWZZ
            },
            {
                path: "yyzwzz",
                component: YYZWZZ
            }
        ]
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