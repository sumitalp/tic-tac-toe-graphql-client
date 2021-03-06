import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import "whatwg-fetch";

import { BASE_NAME } from "../../config";
import Routes from "../../routes";
import ErrorPage from "../../pages/Error";


const httpUrl = `${location.protocol}//localhost:4000`

const httplink = new HttpLink({
    uri: `${httpUrl}/graphql`
});

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    connectToDevTools: true,
    link: httplink as any
});

class App extends React.Component {
    public render() {
        return (
            <ErrorPage>
                <ApolloProvider client={client}>
                    <BrowserRouter basename={"/"}>
                        <Routes />
                    </BrowserRouter>
                </ApolloProvider>
            </ErrorPage>
        );
    }
}

export default App;
