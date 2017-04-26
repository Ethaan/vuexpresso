<template lang="jade">
  .home-view
    .home-content
      h1.title Vuexpresso
      .logo-container
        img(src="../assets/vue-logo.png")
      NotificationComponent(
        v-if="notificationData.message"
        v-bind:type="notificationData.type"
        v-bind:message="notificationData.message"
      )
      CreatePostForm(
        @submit="onSubmitPost"
      )
      PostList(
        v-bind:posts="posts"
        @deletePost="onDeletePost"
      )
</template>

<script>
import _ from 'lodash';
import gql from 'graphql-tag';
import { mapGetters } from 'vuex';
import CreatePostForm from 'components/posts/CreatePostForm';
import PostList from 'components/lists/PostList';

import NotificationComponent from 'components/core/NotificationComponent';

const postsQuery = gql`
  query posts {
    posts {
      _id
      title
    }
  }
`;

export default {
  components: {
    PostList,
    CreatePostForm,
    NotificationComponent,
  },
  methods: {
    onDeletePost(_id) {
      this.$apollo.mutate({
        mutation: gql`mutation ($_id: String!) {
          removePost(_id: $_id) {
            _id
          }
        }`,
        variables: {
          _id,
        },
        updateQueries: {
          posts: (previousResult, { mutationResult }) => {
            const posts = previousResult.posts;
            const postToRemove = mutationResult.data.removePost._id;
            _.remove(posts, post => post._id === postToRemove);
            return { posts };
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          removePost: {
            __typename: 'Post',
            _id,
          },
        },
      }).then(() => {
        this.$store.dispatch('showNotification', { message: 'Post Removed' });
      }).catch((e) => {
        this.$store.dispatch('showNotification', { message: e.message });
      });
    },
    onSubmitPost({ title }) {
      if (!title) {
        this.$store.dispatch('showNotification', {
          type: 'error',
          message: 'Title is Required',
        });
      } else {
        this.$apollo.mutate({
          mutation: gql`mutation ($title: String!) {
            addPost(title: $title) {
              _id
              title
            }
          }`,
          variables: {
            title,
          },
          updateQueries: {
            posts: (previousResult, { mutationResult }) => {
              if (previousResult.posts.find(post => post._id === mutationResult.data.addPost._id)) {
                return previousResult;
              }
              return {
                posts: [
                  ...previousResult.posts,
                  mutationResult.data.addPost,
                ],
              };
            },
          },
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              title,
            },
          },
        }).then(() => {
          this.$store.dispatch('showNotification', { message: 'Post Saved' });
          this.title = '';
        }).catch((e) => {
          this.$store.dispatch('showNotification', { message: e.message });
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      notificationData: 'getMessage',
    }),
  },
  apollo: {
    posts: {
      query: postsQuery,
      loadingKey: 'loading',
    },
  },
  data: () => ({
    posts: [],
    loading: 0,
  }),
};
</script>

<style lang="stylus" scoped>
@import '~css/imports/colors'

.home-view
  display: flex
  align-items: center
  min-height: 24em
  justify-content: center
  background-color: $baseColor

.title
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 9px;
  text-transform: uppercase;
  margin: 12px 0;
  left: 4px;

.home-content
  flex: 1
  flex: none
  max-width: 50%

.logo-container
  text-align: center
  > img
    width: 100px
    height: 100px
</style>
