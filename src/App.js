import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Wrapper from './hoc/Wrapper/Wrapper';
import Message from './components/UI/Message/Message';
import Product from './containers/Product/Product';
import SearchResults from './containers/SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/items/:id" component={Product} />
          <Route path="/items" component={SearchResults} />
          <Route
            path="/"
            exact
            render={() => (
              <Wrapper>
                <Message>Ingresa lo que estás buscando</Message>
              </Wrapper>
            )}
          />
          <Route
            render={() => (
              <Wrapper>
                <Message>Página no encontrada</Message>
              </Wrapper>
            )}
          />
        </Switch>
      </Layout>
    );
  }
}

export default App;
