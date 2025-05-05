
const User = require("../models/User.js")

module.exports = {
    addUser: async function () {
        let user = {
            nickname: "joseph",
        }
        
        await User.create(user);
    },
}