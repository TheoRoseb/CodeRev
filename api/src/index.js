/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
    logger.error('Unhandled Rejection at: Promise ', p, reason));

server.on('listening', () =>
    logger.info(
        'CodeRev API listening on http://%s:%d',
        app.get('host'),
        port
    ));