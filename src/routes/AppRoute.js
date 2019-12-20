import React from 'react';
import { Route   } from 'react-router-dom';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={(props,match,history) => (
      <Layout {...match} {...history}>
        <Component {...props} />
      </Layout>
    )} />
  )
  export default AppRoute;
