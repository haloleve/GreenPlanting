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
const SearchList = () =>
    import ("../views/Home/HomeSearch/SearchInfo.vue");
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
        component: Menu,
        meta: {
            title: "菜单分类"
        }
    },
    {
        path: "/mood/pinlun/huifu",
        name: "HuiFu",
        component: HuiFu,
        meta: {
            title: "回复"
        }
    },
    {
        path: "/mood/pinlun",
        name: "Pinlun",
        component: PinLunMain,
        meta: {
            title: "评论"
        }
    },
    {
        path: "/issue",
        name: "Issue",
        component: Issue,
        meta: {
            title: "发布"
        }
    },
    {
        path: "/",
        redirect: "/home",
        meta: {
            title: "首页"
        }
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            title: "首页"
        },
        children: [{
                path: "all",
                component: HomeAll,
                alias: "",
                meta: {
                    title: "所有"
                }
            },
            {
                path: "hhzz",
                component: HHZZ,
                meta: {
                    title: "花卉种植"
                }
            },
            {
                path: "sgzz",
                component: SGZZ,
                meta: {
                    title: "水果种植"
                }
            },
            {
                path: "sczwzz",
                component: SCZWZZ,
                meta: {
                    title: "蔬菜植物种植"
                }
            },
            {
                path: "gszwzz",
                component: GSZWZZ,
                meta: {
                    title: "观赏植物种植"
                }
            },
            {
                path: "lszwzz",
                component: LSZWZZ,
                meta: {
                    title: "粮食植物种植"
                }
            },
            {
                path: "xwzwzz",
                component: XWZWZZ,
                meta: {
                    title: "纤维植物种植"
                }
            },
            {
                path: "ykzwzz",
                component: YKZWZZ,
                meta: {
                    title: "油科植物种植"
                }
            },
            {
                path: "ylzwzz",
                component: YLZWZZ,
                meta: {
                    title: "饮料植物种植"
                }
            },
            {
                path: "yyzwzz",
                component: YYZWZZ,
                meta: {
                    title: "药用植物种植"
                }
            }
        ]
    },
    {
        path: "/mood",
        name: "Mood",
        component: Mood,
        meta: {
            title: "心情圈"
        }
    },
    {
        path: "/serve",
        name: "Serve",
        component: Serve,
        meta: {
            title: "服务"
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: "个人中心"
        }
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
        meta: {
            title: "搜索"
        }
    },
    {
        path: "/search/lists",
        name: "SearchList",
        component: SearchList,
        meta: {
            title: "搜索列表"
        }
    },
    {
        path: "/info/:category",
        name: "HomeInfo",
        component: PlaneInfo,
        meta: {
            title: "种植分类"
        }
    },
    {
        path: "/detail",
        name: "HomeDetail",
        component: Details,
        meta: {
            title: "详情"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes
});
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;