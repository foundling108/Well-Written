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

    ///////////////////////// Chapters //////////////////////////////

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

        dbInstance.chapters.get_chapters([req.session.user.user_id])
    },

    getChapter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
         
        dbInstance.chapters.read_chapter([params.id])
        .then( ( chapters ) => res.status(200).send( chapters ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get chapters"});
            console.log(err)
        } );
    },

    editChapter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.chapters.update_chapters([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not edit"});
            console.log(err)
        } );
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
    
    //////////////////////// Locations ////////////////////////////

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
        const { params } = req;
         
        dbInstance.locations.read_location([params.id])
        .then( ( locations ) => res.status(200).send( locations ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get locations"});
            console.log(err)
        } );
    },

    editLocation: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.locations.update_locations([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not edit"});
            console.log(err)
        } );
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

    ///////////////////// Characters ///////////////////////////

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

        dbInstance.characters.get_characters([req.session.user.id])
    },

    getCharacter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
         
        dbInstance.characters.read_character([params.id])
        .then( ( characters ) => res.status(200).send( characters ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get characters"});
            console.log(err)
        } );
    },

    editCharacter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.characters.update_characters([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not edit"});
            console.log(err)
        } );
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

    ////////////////////// Progress /////////////////////////////

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

        dbInstance.progress.get_progress([req.session.user.id])
    },

    getProgress: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
         
        dbInstance.progress.read_progress([params.id])
        .then( ( progress ) => res.status(200).send( progress ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get progress"});
            console.log(err)
        } );
    },

    editProgress: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.progress.update_progress([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not edit"});
            console.log(err)
        } );
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
