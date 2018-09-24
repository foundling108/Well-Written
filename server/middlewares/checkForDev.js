module.exports = function(req, res, next) {
    if (process.env.NODE_ENV === "development") {
        req.session.user = {user_id: 1}
    }
    return next()
}