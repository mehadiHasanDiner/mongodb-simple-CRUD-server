const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mehadi135
// 74R9zu5qTt1ETcmR

const uri =
  "mongodb+srv://mehadi135:74R9zu5qTt1ETcmR@cluster0.ehabgxd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // const database = client.db("usersDB");
    // const userCollection = database.collection("users");

    const userCollection = client.db("usersDB").collection("users");

    // Data get functionality of Multiple data
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find(); // যেটা ডাটাটা তৈরি করেছি তার নাম
      const result = await cursor.toArray();
      res.send(result);
    });

    // Data post functionality
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user", user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Data Delete functionality
    app.delete("/users/:id", async (req, res) => {
      const deleteId = req.params.id;
      console.log("delete user", deleteId);
      const query = { _id: new ObjectId(deleteId) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // Data get functionality of single data
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    // Data update functionality
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(id, user);

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await userCollection.updateOne(
        filter,
        updatedUser,
        options
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); //ডাটাবেজের সাথে কানেকশন সবসময় থাকবে তাই, এটা কমেন্ট করে দিয়েছি।
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to MongoDB");
});

app.listen(port, () => {
  console.log(`Simple CRUD is running on port, ${port}`);
});
