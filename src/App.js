import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Wrapper from './hoc/Wrapper/Wrapper';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import SearchResults from './containers/SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/items/:id" component={ProductDetail} />
          <Route path="/items" component={SearchResults} />
          <Route
            path="/"
            exact
            render={() => (
              <Wrapper>
                <h2>Ingresa lo que estás buscando</h2>
              </Wrapper>
            )}
          />
          <Route
            render={() => (
              <Wrapper>
                <h2>Página no encontrada</h2>
              </Wrapper>
            )}
          />
        </Switch>
      </Layout>
    );
  }
}

export default App;
