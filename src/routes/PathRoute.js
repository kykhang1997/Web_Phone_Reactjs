import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePageAd from '../pages/admin/HomePageAd';
import AppRoute from './AppRoute';
import HomePage from '../pages/users/HomePage';
import HomeAd from '../components/admin/main/Home';
import Home from "../components/users/main/Home";
import CategoryPageAd from "../pages/admin/category/CategoryPageAd";
import CategoryPageAdForm from "../pages/admin/category/CategoryPageAdForm";
import ProductPageAd from "../pages/admin/product/ProductPageAd";
export class PathRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <AppRoute
              exact
              path="/admin"
              layout={HomePageAd}
              component={HomeAd}
            />
            {/* category */}
            <AppRoute
              exact
              path="/admin/category"
              layout={HomePageAd}
              component={CategoryPageAd}
            />
            <AppRoute
              exact
              path="/admin/category/add"
              layout={HomePageAd}
              component={CategoryPageAdForm}
            />
            <AppRoute
              exact
              path="/admin/category/:id/add"
              layout={HomePageAd}
              component={CategoryPageAdForm}
            />
            {/* product */}
            <AppRoute
              exact
              path="/admin/product"
              layout={HomePageAd}
              component={ProductPageAd}
            />
            <AppRoute 
            exact 
            path="/" 
            layout={HomePage}
            component={Home}
             />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default PathRoute;
