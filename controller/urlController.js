const urlModel = require("../model/urlModel");
const shortid = require("shortid")
 
const createURL = async (req, res) => {
    try {
        const { originalURL } = req.body;
        if(!originalURL){
            throw new Error("url is Required");
        }
        const hashedID = shortid()
        const urlExists = await urlModel.findOne({hashedID})
        if(urlExists){
            throw new Error("shortId already exists")
        }
        
        const url = await urlModel.create({
            shortId: hashedID,
            redirectURL: originalURL,
            visitHistory: []
        })
        // return res.status(201).json({
        //     success: true,
        //     message: "URL Created Successfully",
        //     url
        //   })
        return res.render("index", { id: hashedID})

    }catch(err){
        console.log(err)
        res.status(400).json({
        success: false,
        messsage: err.message
        })
    }
}

const handleGetAnalytics = async (req, res) => {
    try{
        const shortId = req.params.shortId;
        const result = await urlModel.findOne({ shortId })
        return res.json({ 
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory})
    }catch(err){
        console.log(err)
        res.status(400).json({
        success: false,
        messsage: err.message
        })
    }
}

module.exports = {
    createURL,
    handleGetAnalytics
}