const Router = require("koa-router");

const HomeRoutes = require("./components/home.ts");
const LogRoutes = require("./components/log.ts");

const router = new Router();

HomeRoutes(router);
LogRoutes(router);

module.exports = router.routes();
