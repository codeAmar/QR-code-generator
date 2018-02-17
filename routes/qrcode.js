const express = require('express');
const router = express.Router();
const qr = require('qr-image');

router.get('/qrcode', (req, res) => {
    var code = qr.image(req.session.url, {
        type: 'svg'
    });
    res.type('svg');
    code.pipe(res);   
});

module.exports = router;