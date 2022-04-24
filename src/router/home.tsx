// const query_ = require("./sql.query.tsx");

module.exports = router => {
  router.get("/home/getUserSignature", async ctx => {
    // const data = await query_("SELECT * FROM user_info");

    // let { name, title, signature, avatar_url, qq_account, git_account, wechat_account, email_account, zfb_account } =
    //   data[0];

    // ctx.body = {
    //   avatar: avatar_url,
    //   signature,
    //   title,
    //   userName: name,
    //   articlesNum: 10,
    //   tabsNum: 20,
    //   gitURL: git_account,
    //   QQ: qq_account,
    //   WeChat: wechat_account,
    //   Email: email_account
    // };
    ctx.body = {
      avatar: "https://img0.baidu.com/it/u=1801829287,2841444421&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      signature: "Don't cry, do laugh",
      title: "说说我的生活",
      userName: "高歌",
      articlesNum: 10,
      tabsNum: 20,
      gitURL: "",
      QQ: "183412808",
      WeChat: "gaolaogui2",
      Email: "183412808@qq.com"
    };
  });
};
