export default {
  increament(state, payload) {
        state.num += payload ? payload : 1;
    },
    decreament(state, payload) {
        state.num -= payload ? payload : 1;
    }
};
