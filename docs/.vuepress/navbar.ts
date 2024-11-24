import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "edit",
    link: "/posts/",
  },
  {
    text: "笔记",
    icon: "edit",
    prefix: "/notes/",
    children: [
      {
        text: "linux",
        icon: "edit",
        link: "linux"
      },
      {
        text: "k8s",
        icon: "edit",
        link: "k8s"
      },
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
