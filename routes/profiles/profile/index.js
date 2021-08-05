'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    logic = require('./logic');

router.get('/',
    async (req, res) => {
        const result = await logic.getProfile(Number(req.params.profileId));
        res.status(200).json({result});

    });

router.put('/',
    async (req, res) => {
        const result = await logic.updateProfile(Number(req.params.profileId), req.body);
        res.status(200).json({result});

    });

router.delete('/',
    async (req, res) => {
        const result = await logic.removeProfile(Number(req.params.profileId));
        res.status(200).json({result});

    });

router.use('/sizes', require('./sizes'));

module.exports = router;