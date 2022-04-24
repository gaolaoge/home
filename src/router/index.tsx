// import * as Router from "koa-router";
const Router = require("koa-router");

const HomeRoutes = require("./home.tsx");
const LogRoutes = require("./log.tsx");

const router = new Router();

HomeRoutes(router);
LogRoutes(router);

module.exports = router.routes();
