const urlModel = require("../model/urlModel");
const shortid = require("shortid")
 
const createURL = async (req, res) => {
    try {
        const { redirectURL } = req.body;
        if(!redirectURL){
            throw new Error("url is Required");
        }
        const hashedID = shortid()
        const urlExists = await urlModel.findOne({hashedID})
        if(urlExists){
            throw new Error("shortId already exists")
        }
        
        const url = await urlModel.create({
            shortId: hashedID,
            redirectURL: redirectURL,
            visitHistory: []
        })
        res.status(201).json({
            success: true,
            message: "URL Created Successfully",
            url
          })

    }catch(err){
        console.log(err)
        res.status(400).json({
        success: false,
        messsage: err.message
        })
    }
}

module.exports = {
    createURL
}