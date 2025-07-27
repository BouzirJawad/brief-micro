const express = require("express")
const router = express.Router()
const briefController = require("../controllers/brief.controller")

router.get("/list", briefController.getBriefs)
router.get("/brief/:briefId", briefController.getBrief)
router.post("/create", briefController.createBrief)
router.put("/brief/update/:briefId", briefController.updateBrief)
router.delete("/brief/delete/:briefId", briefController.deleteBrief)

router.get("/test", (req, res)=> {
    res.send("brief backend working")
})

module.exports = router