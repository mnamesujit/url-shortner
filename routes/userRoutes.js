const express = require("express");
const { createURL, handleGetAnalytics } = require("../controller/urlController");
const urlModel = require("../model/urlModel");
const router = express.Router();

// GET requests
router.get('/test', async (req, res) => {
    const allUrls = await urlModel.find({});

    return res.render("index", {
        urls:  allUrls
    })
})
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

router.get('/analytics/:shortId', handleGetAnalytics)

// POST request
router.post('/createurl', createURL)

module.exports = router