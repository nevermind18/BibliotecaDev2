const mongoClient = require("mongodb").MongoClient;

        
        mongoClient.connect(MONGO_DB,
                    (error, connection) => {
                        if(error)
                            return console.log(error);
                        else 
                            global.connection = connection.db("biblioteca")
                            console.log("foi")
                    })