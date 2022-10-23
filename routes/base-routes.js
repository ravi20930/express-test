const express = require("express");
const router = express.Router();
const {baseFunction, justAnotherFunc} = require("../controllers/base-controller");

router.get('/base', baseFunction);
router.put('/gjhj', justAnotherFunc);

module.exports = router;
