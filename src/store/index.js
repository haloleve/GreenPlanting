import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    //处理异步 实际操作数据还是mutation context = this.$store
    actions,
    modules: {}
});