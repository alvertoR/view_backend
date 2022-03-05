const { verify } = require('../../utils/jtw.helper');
const { config } = require('../../config/config');

function canAccess(req, res, next) {
    try{
        const authorization = req.headers.authorization || '';
        const token = getToken(authorization);
        
        verify(token, config.jwtLogin);

        next();
    }catch(error){
        return res.status(401).json({
            status: 401,
            success: false,
            data: {
                message: "Unauthorized" || error.message
            }
        });
    }
}

function getToken(auth) {
    if(!auth){
        throw new Error();
    }

    if(auth.indexOf('Bearer') === -1){
        throw new Error('Invalid format');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

module.exports = {
    canAccess
}