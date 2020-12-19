const Twitter = require('twitter');
require('dotenv').config();

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

client.tweet = status => {
    console.log('tweet: ' + status);
    client.post('statuses/update', { status }, (err, status, res) => {
        err ? console.error(err) : console.log('tweet sent');
    });
};

module.exports = client;