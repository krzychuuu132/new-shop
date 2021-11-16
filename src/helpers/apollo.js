import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://krzysztofk.ct8.pl/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
