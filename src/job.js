const sentencesController = require('./controllers/SentencesController');

const CronJob = require('cron').CronJob;

var job = new CronJob(
    '*/30 * * * *',
    // '*/5 * * * * *',
    async () => {
        console.log('cron job started!');
        await sentencesController.generateSentence();
        console.log('cron job stopped!');
    },
    null,
    true,
    'America/Sao_Paulo',
);

module.exports = job;