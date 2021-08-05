'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    validate = require('express-jsonschema').validate,
    logic = require('./logic');

router.get('/',
    async (req, res) => {
        const result = await logic.getSize(Number(req.params.profileId), req.params.sizeType);
        res.status(200).json({result});

    });



router.patch('/',
    validate({
        body: {
            type: 'object',
            additionalProperties: false,
            properties: {
                width: {type: ['number', 'string'], format: 'numeric',  required: false},
                height: {type: ['number', 'string'], format: 'numeric',  required: false},
                depth: {type: ['number', 'string'], format: 'numeric',  required: false},
            }
        }
    }),
    async (req, res) => {
        const result = await logic.updateSize(Number(req.params.profileId), req.body);
        res.status(200).json({result});
    });

// router.delete('/',
//     (req,res) => {
//         const result = logic.removeProfile(Number(req.params.profileId));
//         res.status(200).json({result});
//     });


module.exports = router;