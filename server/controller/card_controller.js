module.exports = {

    createCard: (req, res ) => {

    },

    getAllCards: (req, res) => {
        req.app.get('db').locations.get_locations([req.session.user.id])
    },

    getOneCard: (req, res) => {

    },

    editCard: (req, res) => {

    },

    deleteCard: (req, res) => {

    }
}