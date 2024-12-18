const express = require("express")
const router = express.Router()
const {getSubs, getSingleSub, postSubs, putSubs, deleteSubs} = require("../controller/subscribe.controller")

router.get("/", getSubs)
router.get("/:id", getSingleSub)
router.post("/", postSubs)
router.put("/:id", putSubs)
router.delete("/:id", deleteSubs)


module.exports = router