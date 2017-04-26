const typeDefs = [`
  type Post {
    _id: String
    title: String
  }
  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(title: String!): Post
    removePost(_id: String!): Post
  }

  type Subscription {
    postAdded(title: String!): Post
    postRemoved(_id: String!): Post
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`];

export default typeDefs;
