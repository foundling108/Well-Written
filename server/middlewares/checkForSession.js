module.exports = function ( req, res, next ) {
    const { session } = req;
    if( !session.user ) {
        session.user = {username: ''};
        res.sendStatus(403)
    } else {
        next();
    }

    
}