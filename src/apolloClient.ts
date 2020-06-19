import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-boost/lib/index";
import { get } from "local-storage";
import IntrospectionResultData from "./generate/types";

const endpoint = process.env.REACT_APP_API_ENDPOINT

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: IntrospectionResultData as any,
});

const client = new ApolloClient({
  request: async (operation: any) => {
    const token = await get("userToken");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  },
  cache: new InMemoryCache({
    fragmentMatcher,
  }),
  uri: endpoint
});

export default client;