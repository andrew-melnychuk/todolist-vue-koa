const Koa = require('koa');
const app = new Koa();

const koaBody = require('koa-body');
const router = require('./router');
const cors = require('@koa/cors');

app.use(koaBody());
app.use(cors({
    origin: 'http://localhost:8080',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(router.routes());
app.use(router.allowedMethods());


/* app.use(async (ctx, next) => {
    console.log('Message');
    next();
})

app.use(async (ctx, next) => {
    ctx.body = "Hello Koa!"
}) */

app.listen(3000, () => {
    console.log('http://localhost:3000')
})