module.exports = {

    // createCard: (req, res ) => {

    // },

    // getAllCards: (req, res) => {
        
    // },

    // getCard: (req, res) => {

    // },

    // editCard: (req, res) => {

    // },

    // deleteCard: (req, res) => {

    // },

    // Chapters
    createChapter: (req, res ) => {

    },

    getAllChapters: (req, res) => {
        req.app.get('db').locations.get_chapters([req.session.user.id])
    },

    getChapter: (req, res) => {

    },

    editChapter: (req, res) => {

    },

    deleteChapter: (req, res) => {

    },
    
    // Locations
    createLocation: (req, res ) => {

    },

    getAllLocations: (req, res) => {
        req.app.get('db').locations.get_locations([req.session.user.id])
    },

    getLocation: (req, res) => {

    },

    editLocation: (req, res) => {

    },

    deleteLocation: (req, res) => {

    },

    // Characters
    createCharacter: (req, res ) => {

    },

    getAllCharacters: (req, res) => {
        req.app.get('db').locations.get_characters([req.session.user.id])
    },

    getCharacter: (req, res) => {

    },

    editCharacter: (req, res) => {

    },

    deleteCharacter: (req, res) => {

    },

    // Progress
    createProgress: (req, res ) => {

    },

    getAllProgress: (req, res) => {
        req.app.get('db').locations.get_progress([req.session.user.id])
    },

    getProgress: (req, res) => {

    },

    editProgress: (req, res) => {

    },

    deleteProgress: (req, res) => {

    }
}
