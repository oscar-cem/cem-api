const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const { getUsers } = require('../controllers/users.controller');
const { addUsers } = require('../controllers/users.controller');
const router = Router();

router.get('/', getUsers);
router.post('/', [
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    validateInputs
] ,addUsers);

module.exports = router;