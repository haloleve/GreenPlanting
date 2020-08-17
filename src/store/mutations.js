export default {
    increament(state, payload) {
        state.num += payload ? payload : 1;
    },
    decreament(state, payload) {
        state.num -= payload ? payload : 1;
    },
    setTab(state, payload) {
        state.tabbar = payload;
    },
    searching(state, payload) {
        state.searchRes = payload.res;
        state.searchKey = payload.vals;
        state.searchInput = payload.searchInput;
    },
    searchRes(state) {
        state.searchRes = null;
    },
    searchKey(state, keyword) {
        state.searchKey = keyword;
    },
    setListInfo(state, payload) {
        state.listInfo = payload
    },
    setBackTop(state, payload) {
        state.backTop = payload
    }
};