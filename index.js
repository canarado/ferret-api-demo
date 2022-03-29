// imports
const express = require('express');
const path = require('path');
const cors = require('cors');
const api = express();
const webpage = express();
const { apiPort, webPort } = require('./config');
const webRoutes = require('./web/server');
const apiRoutes = require('./api');

if(!apiPort) apiPort = 4582;
if(!webPort) webPort = 4583;

// tell our applications to use our routing controllers for modularity
api.use(cors());
api.use('/', apiRoutes);

// webpage.set('views', path.join(__dirname, 'views'));
webpage.use(cors());
webpage.use('/', webRoutes)
webpage.use(express.static(path.join(__dirname, 'images')));

// set applications to listen on configured ports
api.listen(apiPort, () => {
    console.log(`API listening on port ${apiPort}`);
});
webpage.listen(webPort, () => {
    console.log(`Frontend listening on port ${webPort}`);
});