

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
        const dbInstance = req.app.get('db');
        
       
        dbInstance.chapters.create_chapters([  req.session.user.user_id ])
        .then( (chapters) => {
            res.status(200).send( chapters )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create chapter"});
            console.log(err)
        } );
    },

    getAllChapters: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.locations.get_chapters([req.session.user.user_id])
    },

    getChapter: (req, res) => {
        const dbInstance = req.app.get('db');

         
    },

    editChapter: (req, res) => {
        const dbInstance = req.app.get('db');


    },

    deleteChapter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.chapters.delete_chapter([params.id])
        .then( (chapters) => res.status(200).send(chapters) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    },
    
    // Locations
    createLocation: (req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.locations.create_locations([  req.session.user.user_id ])
        .then( (locations) => {
            res.status(200).send( locations )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create location"});
            console.log(err)
        } );
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
        const { params } = req;

        dbInstance.locations.delete_location([params.id])
        .then( (locations) => res.status(200).send(locations) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    },

    // Characters
    createCharacter: (req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.characters.create_character([  req.session.user.user_id ])
        .then( (characters) => {
            res.status(200).send( characters )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create character"});
            console.log(err)
        } );
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
        const { params } = req;

        dbInstance.characters.delete_character([params.id])
        .then( (characters) => res.status(200).send(characters) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    },

    // Progress
    createProgress: (req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.progress.create_progress([  req.session.user.user_id ])
        .then( (progress) => {
            res.status(200).send( progress )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not log progress"});
            console.log(err)
        } );
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
        const { params } = req;

        dbInstance.progress.delete_progress([params.id])
        .then( (progress) => res.status(200).send(progress) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    }
}
