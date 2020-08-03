export default {
    decAsync(context, payload) {
        context.commit('decreament', payload);
    },
    searching(context, payload) {
        context.commit('searching', payload);
    }
};