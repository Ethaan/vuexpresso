import { SubscriptionServer } from 'subscriptions-transport-ws';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addResolveFunctionsToSchema /* addMockFunctionsToSchema */ } from 'graphql-tools';
// import Mocks from './mocks';
import Schema from './schema';
import resolvers from './resolvers';
import baseConfig from './base-config';
import { subscriptionManager } from './subscriptions';

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers,
});

// If you want to use Mocks, just uncooment this code, and add
// Mocks into mocks.js file
/* addMockFunctionsToSchema({
  mocks: Mocks,
  schema: executableSchema,
  preserveResolvers: true,
}); */

addResolveFunctionsToSchema(executableSchema, resolvers);

const serverConfig = graphqlExpress(req => ({
  schema: executableSchema,
  rootValue: { db: req.app.locals.db },
}));

const graphiqlConfig = graphiqlExpress({
  endpointURL: baseConfig.graphqlPath,
});

export default {
  ...baseConfig,
  serverConfig,
  graphiqlConfig,
  initSubscriptionServer: ({ server, path }) => (
    new SubscriptionServer({ subscriptionManager }, { path, server })
  ),
};
