const express = require('express');
const router = express.Router();

router.get('/:username', function(req, res, next) {
    res.render('play', {username: req.params.username});
});

router.get('/', function(req, res, next) {
    res.send("<script>window.location.href = '/';</script><a href='/'>If you don't get forwarded, please click here.</a>");
});

module.exports = router;
