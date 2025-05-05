const Router = require('koa-router');
const router = new Router();
const logger = require('../logger.js')
const ResponseUtil = require('../utils/ResponseUtil.js')
const bookService = require('../services/bookService.js')

const basicPath = '/book'
router.get(basicPath+'/detail', async (ctx) => {
    let book = await bookService.getBookDetail()
    ResponseUtil.ok(ctx,book)
})


router.post(basicPath+'/save', async (ctx) => {
    await bookService.saveBook()
    ResponseUtil.ok(ctx)
})

router.post(basicPath+'/updateBookAndUser', async (ctx) => {
    await bookService.updateBookAndUser()
    ResponseUtil.ok(ctx)
})

module.exports = router;