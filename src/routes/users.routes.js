const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers } = require('../controllers/users.controller');
const { addUsers } = require('../controllers/users.controller');
const router = Router();

router.get('/', getUsers);
router.post('/', [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail()
] ,addUsers);

module.exports = router;