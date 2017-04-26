const port = 8080;
const graphqlPath = '/graphql';
const subscriptionsPath = '/subscriptions';

export default {
  port,
  graphqlPath,
  subscriptionsPath,
  uri: `http://localhost:${port}${graphqlPath}`,
  graphiqlPath: '/graphiql',
  subscriptionsUrl: `ws://localhost:${port}${subscriptionsPath}`,
  graphiqlInterfacePath: '/graphiql',
};
