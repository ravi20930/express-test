const express = require("express");
const router = express.Router();
const {baseFunction, justAnotherFunc} = require("../controllers/base-controller");

router.get('/info', baseFunction);
router.put('/update', justAnotherFunc);

module.exports = router;
