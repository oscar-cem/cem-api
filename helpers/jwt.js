const jwt = require('jsonwebtoken');

const buildJWT = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = {
            uid
        }

        jwt.sign(payload, process.env.JWT_SECRET, {

            expiresIn: '12h'

        }, (err, token)=> {

            if (err) {
                reject('No se pudo crear JWT');
                console.log(err);
            } else {
                resolve( token );
            }

        });
    })

}

module.exports = {
    buildJWT
}