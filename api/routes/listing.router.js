const express = require("express");
const {
  createListning,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} = require("../controllers/listing.controller");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.post("/create", verifyToken, createListning);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);

module.exports = router;
