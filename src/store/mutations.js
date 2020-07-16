export default {
    increament(state, payload) {
        state.num += payload ? payload : 1;
    },
    decreament(state, payload) {
        state.num -= payload ? payload : 1;
    },
    setTab(state, payload) {
        state.tabbar = payload;
    }
};