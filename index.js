const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { MongoClient } = require("mongodb");

var uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-fpqkjij-shard-00-00.xbk29ye.mongodb.net:27017,ac-fpqkjij-shard-00-01.xbk29ye.mongodb.net:27017,ac-fpqkjij-shard-00-02.xbk29ye.mongodb.net:27017/?ssl=true&replicaSet=atlas-qjfq6h-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("task-track-db");
    const attachments = database.collection("attachments");

    // test app
    app.get("/", (req, res) => {
      res.send("Hello Server!");
    });

    console.log("Server is ready!");
  } finally {
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
