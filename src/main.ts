import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "element-plus/lib/theme-chalk/index.css";
import { ElDatePicker } from "element-plus";
// import ElementPlus from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale";

locale.use(lang);
const components = [ElDatePicker];

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.config.globalProperties.$ELEMENT = { size: "small" };
// app.use(ElementPlus, { locale: lang });
app.use(router);
app.mount("#app");
