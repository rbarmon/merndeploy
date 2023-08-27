import { MongoClient } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";

const connectionString = "mongodb+srv://rbar0032:97BOGMAnYhv1zSzZ@cluster0.afzebal.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;