const express = require("express");
const router = express.Router();

const VendorController = require("../controller/VendorController");

router.get('/', VendorController.index); // Assuming index handles GET requests for '/'
router.post('/store', VendorController.store);
router.post('/update', VendorController.Update);
router.post('/destroy', VendorController.destroy);

module.exports = router;
