// imports
const express = require('express');
const router = express.Router();
const path = require('path');

// root route "example.xyz/"
router.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), 'web', 'views', 'index.html'));
});

module.exports = router;