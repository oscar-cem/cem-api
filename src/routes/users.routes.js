const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const { getUsers, addUsers, updateUser } = require('../controllers/users.controller');
const router = Router();

router.get('/', getUsers);

router.post('/', [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password es obligatorio').not().isEmpty(),
    validateInputs
], addUsers);

router.put('/:id', [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    validateInputs
], updateUser);

module.exports = router;