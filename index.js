import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply middleware
await server.start();
server.applyMiddleware({ app });

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
});
