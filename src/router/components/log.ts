const getLogList = [
  {
    title: "示例    我的博客",
    date: 1637073842774,
    tagList: ["top", "life", "note", "trip", "log"],
    log_uuid: "23423423423434454"
  },
  {
    title: "关于我的博客",
    date: 1637073842773,
    tagList: ["top", "life", "note", "trip", "log"],
    log_uuid: "23423423423434450"
  },
  {
    title: "关于我的博客",
    date: 1637073842772,
    tagList: ["top", "life", "note", "trip", "log"],
    log_uuid: "23423423423434451"
  },
  {
    title: "关于我的博客",
    date: 1637073842771,
    tagList: ["top", "life", "note", "trip", "log"],
    log_uuid: "23423423423434451"
  }
];

module.exports = router => {
  router.get("/log/getLogList", async ctx => {
    ctx.body = getLogList;
  });
};
