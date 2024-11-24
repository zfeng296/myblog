import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "尤小风",
  description: "个人博客",

  base: "/myblog/",

  theme,
});
