const express = require('express')
const router = express.Router()

const { getItems, getItem, getTygia } = require('../controllers/itemsControllers')

router.get('/', getItems);
router.get('/:mahang', getItem);
// router.get('/tygia', getTygia);

module.exports = router;