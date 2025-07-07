const express = require("express")
const router = express.Router()

router.get("/")
router.post("/create")
router.delete("/delete")
router.put("/update")

module.exports = router