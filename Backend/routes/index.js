const router = require('express').Router();

const addStu = require("./addStu.js",)
const deleteStu = require("./deleteStu.js")
const updateStu = require("./update.js")



router.use("/addstu", addStu)
router.use("/deletestu", deleteStu)
router.use("/updatestu", updateStu)


module.exports = router