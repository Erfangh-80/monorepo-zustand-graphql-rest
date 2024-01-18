import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:3051/graphql';

const graphQLClient = new GraphQLClient(endpoint);
export default graphQLClient;
