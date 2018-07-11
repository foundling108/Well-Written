module.exports = {
    
    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { user_id, username, password} = req.body

        dbInstance.create_users([ user_id, username, password ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },
   
    getUsers: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        
        dbInstance.get_users([params.id])
        .then( (user) => res.status(200).send( user ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    update: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;
        
        dbInstance.update_user([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.delete_user([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    }

    
}