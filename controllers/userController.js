const Router = require('koa-router');
const router = new Router();
const logger = require('../logger.js')
const ResponseUtil = require('../utils/ResponseUtil.js')
const userService = require('../services/userService.js')

const basicPath = '/user'

router.post(basicPath+'/save', async (ctx) => {
    await userService.addUser()
    ResponseUtil.ok(ctx)
})

module.exports = router;