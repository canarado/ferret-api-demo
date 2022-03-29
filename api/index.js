const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('../config');
const fs = require('fs');
const files = fs.readdirSync(path.join(process.cwd(), 'images'));

router.get("/", (req, res) => {
    let randomFile = files[Math.floor(Math.random() * files.length)];

    res.json({
        file: `${config.webUrlName ?? 'http://localhost:4583/'}${randomFile}`,
    });
});

module.exports = router;