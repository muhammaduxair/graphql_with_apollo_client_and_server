const { ApolloServer, gql } = require("apollo-server");

const STUDENT_DATA = [
  {
    id: 1,
    name: "muhammad",
    email: "muhammad@gmailcom",
    age: 20,
  },
  {
    id: 2,
    name: "uzair",
    email: "uzair@gmailcom",
    age: 18,
  },
  {
    id: 3,
    name: "ali",
    email: "ali@gmailcom",
    age: 19,
  },
  {
    id: 4,
    name: "daniyal",
    email: "dani@gmailcom",
    age: 22,
  },
];

const typeDefs = gql`
  type Students {
    id: Int
    name: String
    email: String
    age: Int
  }
  type Query {
    students: [Students]
  }
`;

const resolvers = {
  Query: {
    students: () => STUDENT_DATA,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
