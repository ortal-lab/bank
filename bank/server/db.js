const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri =
  "mongodb+srv://pikud162:EJ2F1VAcMdmUicYd@cluster0.cmr2lx6.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let _db;
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    _db = await client.db("bank").command({ ping: 1 });
    console.log(_db);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.log(_db.collection("users").find());
  } finally {
    //   finally {
    //     Ensures that the client will close when you finish/error
    //     await client.close();
    //   }
  }
}

module.exports = {
  getDb: function () {
    return _db;
  },
  connectToServer: run,
};
