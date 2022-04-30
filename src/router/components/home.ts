// const query_ = require("./sql.query.tsx");
const data = {
  avatar: "https://img0.baidu.com/it/u=1801829287,2841444421&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  signature: "人生总有不如意，别人老是管东管西，他们都是在放屁",
  title: "Baby不要叹气、",
  userName: "高歌",
  articlesNum: 10,
  tabsNum: 20,
  gitURL: "",
  QQ: "183412808",
  WeChat: "gaolaogui2",
  Email: "183412808@qq.com"
};

module.exports = router => {
  router.get("/home/getUserSignature", async ctx => {
    ctx.body = {
      code: 200,
      message: "success",
      data
    };
  });
};
