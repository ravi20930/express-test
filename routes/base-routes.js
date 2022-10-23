const express = require("express");
const router = express.Router();
const {baseFunction, justAnotherFunc} = require("../controllers/base-controller");

router.get('/base', baseFunction);
// router.put('/base', justAnotherFunc);

module.exports = router;
