

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
        console.log('create chapter', req.session.user.user_id)
        const dbInstance = req.app.get('db');
        // const { author_id, description, input } = req.body
        // author_id from session
       

        dbInstance.chapters.create_chapters([  req.session.user.user_id ])
        .then( (chapters) => {
            
            console.log('chapters: ', chapters)
            res.status(200).send( chapters )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create chapter"});
            console.log(err)
        } );
    },

    getAllChapters: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.locations.get_chapters([req.session.user.id])
    },

    getChapter: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    editChapter: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    deleteChapter: (req, res) => {
        const dbInstance = req.app.get('db');


    },
    
    // Locations
    createLocation: (req, res ) => {
        const dbInstance = req.app.get('db');


    },

    getAllLocations: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.locations.get_locations([req.session.user.id])
    },

    getLocation: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    editLocation: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    deleteLocation: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    // Characters
    createCharacter: (req, res ) => {
        const dbInstance = req.app.get('db');


    },

    getAllCharacters: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.locations.get_characters([req.session.user.id])
    },

    getCharacter: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    editCharacter: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    deleteCharacter: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    // Progress
    createProgress: (req, res ) => {
        const dbInstance = req.app.get('db');


    },

    getAllProgress: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.locations.get_progress([req.session.user.id])
    },

    getProgress: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    editProgress: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    deleteProgress: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.progress.delete_progress([req.session.user.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete progress"});
            console.log(err)
        } );
    }
}
