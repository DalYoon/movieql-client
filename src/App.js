import React, { Component, Fragment } from "react";
import client from "./apolloClient";
import { ApolloProvider } from "../node_modules/react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/detail/:movieId"} component={Detail} />
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
