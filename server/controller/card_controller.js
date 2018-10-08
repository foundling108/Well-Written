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

   
    getLocations: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        
        db.locations.read_location([user_id])
        .then(Locations => {
            res.status(200).send(Locations)
        })
        .catch(err => console.log(err))
    },

    saveLocations: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { location_id, location_name, location_description } = req.body;

        db.locations.edit_location([ location_id, location_name, location_description, user_id ])
        .then(Locations => {
            res.status(200).send(Locations)
        })
        .catch(err => console.log(err))
    },

    deleteLocations: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { id } = req.params;


        db.locations.delete_location([user_id, id])
        .then(deleted => {
            res.status(200).send(deleted)
        })
        .catch(err => console.log(err))
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

    
    getCharacters: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        
        db.characters.read_character([user_id])
        .then(characters => {
            res.status(200).send(characters)
        })
        .catch(err => console.log(err))
    },

    saveCharacters: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { character_id, character_name, character_description } = req.body;

        db.characters.edit_character([ character_id, character_name, character_description, user_id ])
        .then(characters => {
            res.status(200).send(characters)
        })
        .catch(err => console.log(err))
    },

    deleteCharacters: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { id } = req.params;


        db.characters.delete_character([user_id, id])
        .then(deleted => {
            res.status(200).send(deleted)
        })
        .catch(err => console.log(err))
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

    
    getProgress: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        
        db.progress.read_progress([user_id])
        .then(progress => {
            res.status(200).send(progress)
        })
        .catch(err => console.log(err))
    },

    saveProgress: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { progress_id, entry_date, word_count } = req.body;

        db.progress.edit_progress([ progress_id, entry_date, word_count, user_id ])
        .then(progress => {
            res.status(200).send(progress)
        })
        .catch(err => console.log(err))
    },

    deleteProgress: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        const { id } = req.params;


        db.progress.delete_progress([user_id, id])
        .then(deleted => {
            res.status(200).send(deleted)
        })
        .catch(err => console.log(err))
    }
}
