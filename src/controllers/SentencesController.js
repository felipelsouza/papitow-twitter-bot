const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adapter = new FileAsync('db.json');
const db = low(adapter);

const client = require('../config/twitter');

module.exports = {
    async generateSentence() {

        const firstWordsArray = (await db)
            .get('first_words')
            .value()

        const middleWordsArray = (await db)
            .get('middle_words')
            .value();

        const finalWordsArray = (await db)
            .get('final_words')
            .value();

        const firstPart = firstWordsArray[Math.floor(Math.random() * firstWordsArray.length)]
        const middlePart = middleWordsArray[Math.floor(Math.random() * middleWordsArray.length)]
        const finalPart = finalWordsArray[Math.floor(Math.random() * finalWordsArray.length)]

        const sentence = `${firstPart.value} ${middlePart.value} ${finalPart.value}`;

        console.log(sentence);

        client.tweet(sentence);
    }
}
