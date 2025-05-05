const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const logger = require('./logger.js');
//set static catelog
app.use(serve(path.join(__dirname, '.')));
//handle global error
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        // handle error
        ctx.status = err.status || 500;
        ctx.body = {
            errno: 1,
            errmsg: err.message || 'Internal Server Error',
        };
        logger.error(err);
        logger.error(err.stack);
    }
});


const userController = require('./controllers/userController.js');
const bookController = require('./controllers/bookController.js');
app.use(userController.routes()).use(userController.allowedMethods());
app.use(bookController.routes()).use(bookController.allowedMethods());

app.listen(3000);