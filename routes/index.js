'use strict';

const router = require('express-promise-router') ({
   mergeParams: true
});

router.use('/profiles',require('./profiles'));

module.exports = router;