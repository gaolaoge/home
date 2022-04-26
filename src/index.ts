const Koa = require("koa");
const staticResource = require("koa-static");
const cors = require("koa2-cors");
const path = require("path");
const _Routes = require("./router");

const app = new Koa();

app.use(staticResource(path.join(__dirname, "../front-end/build")));

app.use(cors());

app.use(_Routes);

app.listen(2345);
