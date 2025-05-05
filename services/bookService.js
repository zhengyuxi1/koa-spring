
const Book = require("../models/Book.js")
const sequelize = require("../db/config.js");
const User = require("../models/User.js");
const logger = require("../logger.js");




module.exports = {
    saveBook: async function () {
        let book = {
            name: "Pride and Prejudice",
            userId: 1
        }
        //if id is exist, update    else,insert
        await Book.upsert(book);
    },

    updateBook: async function () {
        await Book.update(
            { name: "Don Quixote" }, // the attribute witch you want to update
            {
                where: {
                    id: 1,
                },
            }
        );
    },
    getBookDetail: async function () {
        let book = await Book.findOne({
            where: {
                id: 1,
            },
        });
        return book;
    },

    updateBookAndUser: async function () {
        await sequelize.transaction(async (t) => {
            let effectUserRowCount = await User.update(
                { nickname: "Mike" },
                {
                    where: {
                        id: 1,
                    },
                    transaction:t
                }
            );
            if(effectUserRowCount == 0){
                
                throw new Error("User not found")
            }

            let effectBookRowCount = await Book.update(
                { name: "Jane Eyre" },
                {
                    where: {
                        id: 1,
                    },
                    transaction:t
                }
            );
            if(effectBookRowCount == 0){
                
                throw new Error("Book not found")
            }
        })
    },
}