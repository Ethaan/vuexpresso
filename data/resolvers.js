import { pubsub } from './subscriptions';

const randomId = () => {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
};

const resolvers = {
  Query: {
    async posts({ db }) {
      const query = await db.collection('posts').find().toArray();
      return query;
    },
  },
  Mutation: {
    addPost: async ({ db }, { title }) => {
      /* eslint-disable no-console */
      console.log(`Adding post with title: ${title}`);
      const _id = randomId();
      const newPost = await db.collection('posts').insert({ _id, title });
      pubsub.publish('postAdded', newPost);
      return { title, _id };
    },
    removePost: async ({ db }, { _id }) => {
      /* eslint-disable no-console */
      console.log(`Removing post with _id: ${_id}`);
      pubsub.publish('postRemoved', _id);
      await db.collection('posts').remove({ _id });
      return { _id };
    },
  },
  Subscription: {
    postAdded(post) {
      return post;
    },
  },
};

export default resolvers;
