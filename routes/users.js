const { Router } = require('express');
const { getUsers } = require('../controllers/users');
const { addUsers } = require('../controllers/users');
const router = Router();

router.get('/', getUsers);
router.post('/', addUsers);

module.exports = router;