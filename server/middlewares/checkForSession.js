module.exports = function(req, res, next) {
    if( !req.session.user ) {
        req.session.user = {
            user_id: 0,
            username: ''
        };
    }
    next();
}