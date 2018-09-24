module.exports = function (req, res, next) {
    if(req.session.user.user_id === 0) {
        res.status(403).send('You must login before continuing');
    }

    next();
}