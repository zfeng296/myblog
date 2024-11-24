import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/":[
  //   "",
  //   {
  //     text: "笔记",
  //     icon: "lightbulb",
  //     prefix: "notes/",
  //     children: [
  //       "linux/",
  //       "k8s/",
  //     ],
  //   },
  //   {
  //     text: "博文",
  //     icon: "signs-post",
  //     prefix: "posts/",
  //     children: [
  //       "docker/",
  //       "k8s/",
  //       "mysql/",
  //       "nginx/",
  //     ],
  //   },
  // ],
  "/notes/": "structure",
  "/posts/": "structure",
});
