const fs = require("fs");
const path_ = require("path");

module.exports = router => {
  router.get("/resume/getResume", async ctx => {
    const readFilePath = path_.resolve(__dirname, "../../assets/work.pdf");
    // const rs = fs.createReadStream(readFilePath, {
    //   flags: "r",
    //   mode: 0o666,
    //   autoClose: true
    // });
    // rs.pipe(ctx.body);

    let detail = fs.readFileSync(readFilePath);
    ctx.body = detail;
    // ctx.body = getLogList;
  });
};
