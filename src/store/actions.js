export default {
    decAsync(context, payload) {
        context.commit('decreament', payload);
    }
};
