import Vue from "vue";
import { Button, Select } from "element-ui";
import { Message } from 'element-ui';
import { Carousel, CarouselItem, Collapse, CollapseItem } from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.prototype.$message = Message;