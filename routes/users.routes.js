const { Router } = require('express');
const { getUsers } = require('../controllers/users.controller');
const { addUsers } = require('../controllers/users.controller');
const router = Router();

router.get('/', getUsers);
router.post('/', addUsers);

module.exports = router;