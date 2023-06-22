const express = require("express");
const { createURL } = require("../controller/urlController");
const urlModel = require("../model/urlModel");
const router = express.Router();

// GET request
router.get('/:shortId', async (req, res) => {
    try{
        const shortId = req.params.shortId;
        const entry = await urlModel.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            }
        )
        res.redirect(entry.redirectURL)
    }catch(err){
        console.log(err)
        res.status(400).json({
            success: false,
            messsage: err.message
            })
    }
})

// POST request
router.post('/createurl', createURL)

module.exports = router