import { ApolloServer } from "apollo-server";
const fs = require("fs");
const path = require("path");

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    info: () => "Hacker News Clone",
    feed: async (parent: any, args: any, context: any) => {
      return context.prisma.link.findMany();
    },
  },
  Mutation: {
    post: (parent: any, args: any, context: any) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      });
      return newLink;
    },
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => console.log(`server ready. port: ${url} `));
