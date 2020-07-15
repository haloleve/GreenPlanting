import Vue from "vue";
import { Button, Select } from "element-ui";
import { Message } from 'element-ui';
import { Carousel } from "element-ui";
import { CarouselItem } from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$message = Message;