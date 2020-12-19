const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adapter = new FileAsync('db.json');
const db = low(adapter);

const client = require('../config/twitter');

module.exports = {
    async generateSentence(req, res) {
        const firstWords = (await db)
            .get('first_words')
            .find({ id: 1 })
            .value();

        const middleWords = (await db)
            .get('middle_words')
            .find({ id: 1 })
            .value();

        const finalWords = (await db)
            .get('final_words')
            .find({ id: 1 })
            .value();

        const sentence = `${firstWords.value} ${middleWords.value} ${finalWords.value}`;

        client.tweet(sentence);

        return res.json({ sentence });
    }
}


// routes.get('/', (req, res) => {
//     var msg = 'Yes Baby!!!';

//     client.tweet(msg);

//     res.json({
//         tweet: msg
//     })
// });