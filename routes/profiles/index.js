'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    validate = require('express-jsonschema').validate,
    logic = require('./logic');


router.get('/',
    validate({
        query: {
            type: 'object',
            additionalProperties: true,
            properties: {
                priceIsGreater: {type: ['number', 'string'], format: 'numeric', minimum: 0, maximum: 1000, required: false},
                priceIsLower: {type: ['number', 'string'], format: 'numeric', minimum: 0, maximum: 1000, required: false    }
            }
        }
    }),
    async (req, res) => {
        const result = await logic.getProfiles(req.query);
        res.status(200).json({result});

    });

router.post('/',
    validate({
        body: {
            type: 'object',
            additionalProperties: true,
            properties: {
                item: {
                    type: 'object',
                    additionalProperties: true,
                    properties: {
                        price: {type: ['number', 'string'], format: 'numeric', minimum: 0, maximum: 1000000, required: false},
                        text: {type: 'string',minLength:2 , maxLength:20 , required: false}

                    }
                },
            }
        }
    }),
    async (req, res) => {
        const result = await logic.createProfile(req.body);
        res.status(200).json({result});

    });

router.use('/:profileId',
    validate({
        params: {
            type: 'object',
            additionalProperties: false,
            properties: {
                profileId: {type: ['number', 'string'], format: 'numeric',  required: false}
            }
        }
    }),
    require('./profile'));


module.exports = router;