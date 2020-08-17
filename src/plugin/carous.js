class Carous {
    constructor(options) {
        this.default = options ? options : { 'id': 'carous', 'interval': 1500 };
        this.carous = document.querySelector("." + this.default.id);
        this.ul = this.carous.children[0];
        this.ol = this.carous.children[1];
        this.w = this.carous.offsetWidth;
        this.flag = false;
        this.index = 0;
        this.timeLoop = null;
        this.init();
    }
    init() {
        this.autoplay();
        this.transitionEnd();
        this.touchMove();
    }
    autoplay() {
        this.timeLoop = setInterval(() => {
            this.index++;
            let translateX = -this.index * this.w;
            this.ul.style.transition = 'all .3s';
            this.ul.style.transform = `translateX(${translateX}px)`;
        }, this.default.interval);
    }
    transitionEnd() {
        let _this = this;
        this.ul.addEventListener('transitionend', function() {
            if (_this.index >= 3) {
                _this.index = 0;
                _this.ul.style.transition = 'none';
                let translateX = _this.index * _this.w;
                _this.ul.style.transform = `translateX(${translateX}px)`;
            }
            if (_this.index < 0) {
                _this.index = 2;
                _this.ul.style.transition = "none";
                let translateX = -index * w;
                _this.ul.style.transform = `translateX(${translateX}px)`;
            }
            //配套焦点
            _this.ol.querySelector(".current").classList.remove("current");
            _this.ol.children[_this.index].classList.add("current");
        })
    }
    touchMove() {
        //手指滑动轮播
        let startX = 0;
        let moveX = 0;
        let _this = this;
        this.ul.addEventListener("touchstart", function(e) {
            startX = e.targetTouches[0].pageX;
            clearInterval(_this.timeLoop);
        }, { passive: true });
        this.ul.addEventListener(
            "touchmove",
            function(e) {
                //计算移动距离
                //console.log(e.targetTouches)
                moveX = e.targetTouches[0].pageX - startX;
                let translateX = -_this.index * _this.w + moveX;
                _this.ul.style.transition = "none";
                _this.ul.style.transform = `translateX(${translateX}px)`;
                _this.flag = true;
                e.preventDefault();
            }, { passive: true }
        );
        this.ul.addEventListener("touchend", function(e) {
            if (_this.flag) {
                if (Math.abs(moveX) > 50) {
                    //如果右滑 播放是一张 moveX是正值
                    if (moveX > 0) {
                        _this.index--;
                    } else {
                        _this.index++;
                    }
                    _this.ul.style.transition = "all .3s";
                    let translateX = -_this.index * _this.w;
                    _this.ul.style.transform = `translateX(${translateX}px)`;
                } else {
                    _this.ul.style.transition = "all .3s";
                    let translateX = -_this.index * _this.w;
                    _this.ul.style.transform = `translateX(${translateX}px)`;
                }
            }
            clearInterval(_this.timeLoop);
            _this.timeLoop = setInterval(function() {
                _this.index++;
                let translateX = -_this.index * _this.w;
                _this.ul.style.transition = "all .3s";
                _this.ul.style.transform = `translateX(${translateX}px)`;
            }, _this.default.interval);
        });
    }
}
export default Carous;