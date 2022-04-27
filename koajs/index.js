const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");
const router = new Router();

router.get("/index" , (ctx) => {
    ctx.status = 200;
    ctx.body = "<h1>İndex Sayfasına Hoşgeldiniz</h1>"
});

router.get("/hakkimda" , (ctx) => {
    ctx.status = 200;
    ctx.body = "<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>"
});

router.get("/iletisim" , (ctx) => {
    ctx.status = 200;
    ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz</h1>"
});
app.use(router.routes());

const port = 3000;
app.listen(port, () => {
    console.log("sunucu port %d de çalışıyor",port);
});