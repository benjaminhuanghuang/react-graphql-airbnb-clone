import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://loacalhost:4000',
});