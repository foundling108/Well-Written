module.exports = {
    createChapter: (req, res ) => {
        const db = req.app.get('db');
        
       
        db.chapters.create_chapters([  req.session.user.user_id ])
        .then( (chapters) => {
            res.status(200).send( chapters )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create chapter"});
            console.log(err)
        } );
    },

    getChapters: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        
        db.chapters.read_chapter([user_id])
        .then(chapters => {
            res.status(200).send(chapters)
        })
        .catch(err => console.log(err))
    },

    saveChapters: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { chapter_id, chapter_title, chapter_content } = req.body;

        db.chapters.edit_chapter([ chapter_id, chapter_title, chapter_content, user_id ])
        .then(chapters => {
            res.status(200).send(chapters)
        })
        .catch(err => console.log(err))
    },

    deleteChapters: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { id } = req.params;


        db.chapters.delete_chapter([user_id, id])
        .then(deleted => {
            res.status(200).send(deleted)
        })
        .catch(err => console.log(err))
    },
    
    //////////////////////// Locations ////////////////////////////

    createLocation: (req, res ) => {
        const db = req.app.get('db');

        db.locations.create_locations([  req.session.user.user_id ])
        .then( (locations) => {
            res.status(200).send( locations )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create location"});
            console.log(err)
        } );
    },

    getAllLocations: (req, res) => {
        const db = req.app.get('db');

        db.locations.get_locations([req.session.user.id])
    },

    getLocation: (req, res) => {
        const db = req.app.get('db');
        
         
        db.locations.read_location([req.session.user.user_id])
        .then( ( locations ) => res.status(200).send( locations ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get locations"});
            console.log(err)
        } );
    },

    updateLocation: (req, res) => {
        const db = req.app.get('db');
        const { loc_id, name, description } = req.body;

        db.locations.update_location([loc_id, name, description, req.session.user.user_id])
        .then( (locations) => res.status(200).send(locations) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not update"});
            console.log(err)
        } );
    },

    deleteLocation: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;

        db.locations.delete_location([params.id])
        .then( (locations) => res.status(200).send(locations) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    },

    ///////////////////// Characters ///////////////////////////

    createCharacter: (req, res ) => {
        const db = req.app.get('db');

        db.characters.create_characters([  req.session.user.user_id ])
        .then( (characters) => {
            res.status(200).send( characters )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not create character"});
            console.log(err)
        } );
    },

    getAllCharacters: (req, res) => {
        const db = req.app.get('db');

        db.characters.get_characters([req.session.user.id])
    },

    getCharacter: (req, res) => {
        const db = req.app.get('db');
        
         
        db.characters.read_character([req.session.user.user_id])
        .then( ( characters ) => res.status(200).send( characters ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get characters"});
            console.log(err)
        } );
    },

    updateCharacter: (req, res) => {
        const db = req.app.get('db');
        const { char_id, name, description } = req.body;

        db.characters.update_character([char_id, name, description, req.session.user.user_id])
        .then( (characters) => res.status(200).send(characters) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not update"});
            console.log(err)
        } );
    },

    deleteCharacter: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;

        db.characters.delete_character([params.id])
        .then( (characters) => res.status(200).send(characters) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    },

    ////////////////////// Progress /////////////////////////////

    createProgress: (req, res ) => {
        const db = req.app.get('db');

        db.progress.create_progress([  req.session.user.user_id ])
        .then( (progress) => {
            res.status(200).send( progress )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not log progress"});
            console.log(err)
        } );
    },

    getAllProgress: (req, res) => {
        const db = req.app.get('db');

        db.progress.get_progress([req.session.user.id])
    },

    getProgress: (req, res) => {
        const db = req.app.get('db');
        
         
        db.progress.read_progress([req.session.user.user_id])
        .then( ( progress ) => res.status(200).send( progress ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get progress"});
            console.log(err)
        } );
    },

    updateProgress: (req, res) => {
        const db = req.app.get('db');
        const { log_id, word_count, date } = req.body;

        db.progress.update_progress([log_id, word_count, date, req.session.user.user_id])
        .then( (progress) => res.status(200).send(progress) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not update"});
            console.log(err)
        } );
    },

    deleteProgress: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;

        db.progress.delete_progress([params.id])
        .then( (progress) => res.status(200).send(progress) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    }
}
