const express = require('express');
const router = express.Router();

router.get('/result', (req, res) => {
    res.redirect(200, '/');
});

router.post('/result', (req, res) => {
    req.session.url = req.body.myURL;
    res.render('result',{ url : req.body.myURL }); 
});

module.exports = router;