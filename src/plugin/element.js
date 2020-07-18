import Vue from "vue";
import { Button, Select, Input, Upload, Dialog } from "element-ui";
import { Message, Checkbox } from 'element-ui';
import { Carousel, CarouselItem, Collapse, CollapseItem } from "element-ui";

Vue.use(Button);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.prototype.$message = Message;