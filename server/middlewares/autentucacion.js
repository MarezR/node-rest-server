const jwt = require('jsonwebtoken');

//=============================
//Verificar Token
//============================

let verificaToken = (req, res, next) => {

    let token = req.get('token'); //Authorization
    console.log(token)
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();

    });


}


let verificaAdminRol = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.status(401).json({
            ok: false,
            err: 'Usuario no tiene permisos para realizar esta acción'
        });
    }

}



module.exports = {
    verificaToken,
    verificaAdminRol
}