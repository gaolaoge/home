const query_ = require('./sql.query.tsx')

module.exports = router => {
  router.get("/home/getUserSignature", async ctx => {
    const data = await query_('SELECT * FROM user_info');

    let {
      name,
      title,
      signature,
      avatar_url,
      qq_account,
      git_account,
      wechat_account,
      email_account,
      zfb_account
    } = data[0]

    ctx.body = {
      avatar: avatar_url,
      signature,
      title,
      userName: name,
      articlesNum: 10,
      tabsNum: 20,
      gitURL: git_account,
      QQ: qq_account,
      WeChat: wechat_account,
      Email: email_account
    };
  });
};
