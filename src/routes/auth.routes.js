const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const { login } = require('../controllers/auth.controller');
const router = Router();

router.post('/', [
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password es obligatorio').not().isEmpty(),
    validateInputs
], login);




module.exports = router;