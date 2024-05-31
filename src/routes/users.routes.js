const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const { getUsers, addUsers, updateUser, deleteUser } = require('../controllers/users.controller');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', validateJWT, getUsers);

router.post('/', [
    validateJWT,
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password es obligatorio').not().isEmpty(),
    validateInputs
], addUsers);

router.put('/:id', [
    validateJWT,
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    validateInputs
], updateUser);

router.delete('/:id', validateJWT, deleteUser);

module.exports = router;