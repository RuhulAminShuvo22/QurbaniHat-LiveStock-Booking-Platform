
import dns from "node:dns";
dns.setServers(['8.8.8.8' , '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient(process.env.MONGO_URI); // connection string pabo mangodb thrkr
const db = client.db("qurbanirhat");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

   emailAndPassword: { 
    enabled: true, 
  }, 
});






//qurbanirhat


// import dns from "node:dns";
// dns.setServers(['8.8.8.8' , '8.8.4.4']);

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient("mongodb://localhost:27017/database");
// const db = client.db(process.env.MONGODB_URI);

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
//   emailAndPassword: { 
//     enabled: true, 
//   },
// });