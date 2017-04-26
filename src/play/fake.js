import _ from 'lodash';

export default {
  post: () => ({
    _id: _.uniqueId('post'),
    title: 'Title',
  }),
  posts: (howMany = 5) => (
    _.times(howMany, index => ({
      _id: _.uniqueId('post'),
      title: `Title #${index}`,
    }))
  ),
};
