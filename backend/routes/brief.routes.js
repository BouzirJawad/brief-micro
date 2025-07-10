const express = require("express")
const router = express.Router()
const briefController = require("../controllers/brief.controller")

router.get("/", briefController.getBriefs)
router.get("/:id", briefController.getBrief)
router.post("/create", briefController.createBrief)
router.put("/update/:id", briefController.updateBrief)
router.delete("/delete/:id", briefController.deleteBrief)

router.get("/test", (req, res)=> {
    res.send("brief backend working")
})

module.exports = router