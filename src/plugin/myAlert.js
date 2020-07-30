function setStyles(ele, styles) {
    for (let attr in styles) {
        ele.style[attr] = styles[attr];
    }
}

function nones(div) {
    document.body.removeChild(div);
}
const MyALert = (function() {
    // 核心构造函数
    class Alert {
        constructor() {
            this.msg = null;
            this.config = {
                position: "fixed",
                left: "50%",
                bottom: "20%",
                fontSize: "12px",
                backgroundColor: "#696969",
                color: "#fff",
                borderRadius: "30px",
                border: "solid 1px #696969",
                padding: "5px 15px",
                transition: "1s",
                transform: "translateX(-50%)",
                opacity: 1,
            };

        }
        show(msg) {
            this.msg = msg;
            let div1 = document.createElement('div');
            setStyles(div1, this.config);
            div1.innerHTML = msg;
            document.body.appendChild(div1);
            setTimeout(() => {
                div1.style.opacity = 0;
                setTimeout(() => {
                    nones(div1);
                }, 500);
            }, 2000);
        }
    }
    // 核心代码
    let instance;

    return function(text) {
        if (!instance) {
            instance = new Alert();
        }

        // 让实例调用一下 init 方法
        instance.show(text);

        return instance;
    };
})();
export default MyALert;