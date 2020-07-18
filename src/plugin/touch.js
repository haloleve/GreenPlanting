class Touch {
    constructor(options) {
        this.default = options ? options : { id: "carous" };
        this.touchs = document.querySelector("." + this.default.id);
        this.ul = this.touchs.children[0];
        this.w = this.touchs.offsetWidth;
        this.init();
    }
    init() {
        this.touchMove();
    }
    touchMove() {
        //手指滑动轮播
        let startX = 0;
        let moveX = 0;
        let translateX = 0;
        let _this = this;
        this.ul.addEventListener("touchstart", function(e) {
            if (startX == 0) {
                startX = e.targetTouches[0].pageX;
            } else {
                startX = -moveX;
            }
        });
        this.ul.addEventListener("touchmove", function(e) {
            //计算移动距离
            //console.log(e.targetTouches)
            startX = startX > 0 ? startX : -startX;
            moveX = e.targetTouches[0].pageX - startX;
            console.log(moveX);
            translateX = moveX;
            _this.ul.style.transition = "none";
            _this.ul.style.transform = `translateX(${translateX}px)`;
            e.preventDefault();
        });

    }
}
export default Touch;