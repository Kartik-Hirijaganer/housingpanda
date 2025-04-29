const express = require('express');
const { getListings, addListing } = require('../controllers/listingController');

const router = express.Router();

router.get('/', getListings);
router.post('/add', addListing);

module.exports = router;
