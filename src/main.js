import Vue from 'vue';
import 'isomorphic-fetch';
import VueApollo from 'vue-apollo';
import VueRouter from 'vue-router';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import App from './App';
import store from './store';
import routes from './routes';
import config from '../config';
import './css';

const graphqlPort = config.graphql.port;

const networkInterface = createNetworkInterface({
  uri: config.graphql.uri,
  transportBatching: true,
});

const wsClient = new SubscriptionClient(config.graphql.subscriptionsUrl, {
  reconnect: true,
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
);

const apolloClient = new ApolloClient({
  connectToDevTools: true,
  ssrForceFetchDelay: 100,
  networkInterface: networkInterfaceWithSubscriptions,
});


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const router = new VueRouter({
  routes,
  mode: 'history',
});

// Modules
Vue.use(VueApollo, {
  apolloClient,
});
Vue.use(VueRouter);

const ensureReady = apolloProvider.collect();

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  apolloProvider,
  render: h => h(App),
});

ensureReady().then((results) => {
  /* eslint-disable no-console */
  console.log(`${results.length} queries ready`);
  console.log('Graphiql interface running at \n');
  console.log(`http://localhost:${graphqlPort}${config.graphql.graphiqlInterfacePath}`);
});
