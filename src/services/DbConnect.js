const { MongoClient, ServerApiVersion } = require('mongodb');
/**
 * @type {import { "mongodb" }.DB}
 */

let db;
const DbConnect = async () => {
    if (db) return db
    try {
        const uri = `mongodb+srv://the-universal-news:6bcrSaAaFcD9umBh@cluster0.eepi0pq.mongodb.net/?retryWrites=true&w=majority`;
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db("the-universal-news")
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return db
    }

    catch (err) {
        console.log(err)
    }
};

export default DbConnect;