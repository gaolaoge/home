const Koa = require("Koa");
const app = new Koa();

console.log(app);

app.use(async ctx => {
  ctx.body = "hello world";
});

app.listen(1234);
