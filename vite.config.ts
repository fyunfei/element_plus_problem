import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: [
      'dayjs/locale/zh-cn',
      'element-plus/lib/locale',
      'element-plus/lib/locale/lang/zh-cn',
    ],
  },
});
