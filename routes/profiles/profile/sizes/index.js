'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    validate = require('express-jsonschema').validate,
    logic = require('./logic');

router.get('/',
    async (req, res) => {
        const result = await logic.getSizes(Number(req.params.profileId));
        res.status(200).json({result});

    });

router.use('/:sizeType',
    validate({
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                sizeType: {type: ['number', 'string'],required: false}
            }
        }
    }),
    require('./size'));


module.exports = router;