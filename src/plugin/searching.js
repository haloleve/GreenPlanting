class Searchings {
    constructor(vals) {
        this.vals = vals;
        this.items = ["abc", "aaa", "bbb", "ccc", "ddd"];
    }
    ajaxRequest({ user }) {
        return new Promise((resolved, rejected) => {
            setTimeout(() => {
                let res = this.items.includes(user) ? "正确" : "错误";
                resolved(res);
            }, 500);
        });
    }
    send(vals) {
        this.ajaxRequest({
            user: vals
        }).then(res => {
            console.log(res);
        });
    }
    debounce(fn, delay) {
        let timer; // 定时器
        return function(...args) {
            let context = this;
            timer && clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, delay);
        };
    }
}
export default Searchings;