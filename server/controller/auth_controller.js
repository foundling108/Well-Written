module.exports = {
    getUser: (req, res) => {
        if (req.session.user) {
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send('You must log in before continuing')
        }
      },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('http://localhost:3000/#/')
      }
}
    