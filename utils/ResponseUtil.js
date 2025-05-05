module.exports = {
    ok(ctx) {
        ctx.body = { 
            errno: 0,
            errmsg: "success"
         }
    },
    ok(ctx,data) {
        ctx.body = {
            errno: 0,
            errmsg: "success",
            data: data
        }
    },
    fail(ctx){
        ctx.body = {
            errno: 1,
            errmsg: "error"

        }
    }
}