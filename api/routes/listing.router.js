const express = require("express");
const {
  createListning,
  deleteListing,
} = require("../controllers/listing.controller");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.post("/create", verifyToken, createListning);
router.delete("/delete/:id", verifyToken, deleteListing);

module.exports = router;
