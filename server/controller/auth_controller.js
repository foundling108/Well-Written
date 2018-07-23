module.exports = {
    
    signup: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { username, password} = req.body

        dbInstance.users.create_users([ username, password ])
        .then( ( user ) => {
            req.session.user = user;
            res.status(200).send(user.username) })
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },
    
    login: async( req, res, next ) => {
        const { username, password } = req.body;
        const dbInstance = req.app.get('db');
        const users = await dbInstance.users.get_users()            
    const match = users.find( user => user.username === username && user.password === password );

    if ( match ) {
        req.session.user = match;
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Go away.');
    }
    
    },

    logout: (req, res ) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    // res.redirect('http://localhost:3000/#/');
    
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

    getUser: (req, res) => {
        res.send(req.session.user)
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
        // const {params} = req;

        dbInstance.users.delete_user([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    }
}

// let id = 0

// module.exports = {



//     signup: ( req, res, next ) => {
//         const { session } = req;
//         const { username, password } = req.body;

//         users.push({ id, username, password });
//         id++;

//         session.user.username = username;

//         res.status(200).send( session.user );
//     },

//     logout: ( req, res, next ) => {
//         const { session } = req;
//         session.destroy();
//         res.status(200).send( req.session );
//     },

//     getUser: ( req, res, next ) => {
//         const { session } = req;
//         res.status(200).send( session.user );
//     }
// };