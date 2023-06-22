const express = require("express");
const { createURL } = require("../controller/urlController");
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({"message": "OK"}))
router.post('/createurl', createURL)
console.log("routes called")

module.exports = router