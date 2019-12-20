import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePageAd from '../pages/admin/HomePageAd';
import AppRoute from './AppRoute';
import HomePage from '../pages/users/HomePage';
import HomeAd from '../components/admin/main/Home';
import CategoryPageAd from "../pages/admin/category/CategoryPageAd";
import CategoryPageAdForm from "../pages/admin/category/CategoryPageAdForm";
import ProductPageAd from "../pages/admin/product/ProductPageAd";
import ListProductCTN from "../containers/users/ListProductCTN";
import  ProductDetailsCTN  from "../containers/users/ProductDetailsCTN";
import Profiles from "../components/users/main/UserProfiles"
import CartCTN from "../containers/users/CartCTN";
import DangkyCTN from "../containers/users/DangkyCTN";
import LoginCTN from "../containers/users/LoginCTN";
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
        {/* Home */}
            <AppRoute 
            exact 
            path="/" 
            layout={HomePage}
            component={ListProductCTN}
             />
            <AppRoute 
            exact 
            path="/sanpham/:id" 
            layout={HomePage}
            component={ProductDetailsCTN}
             />
            <AppRoute 
            exact 
            path="/giohang" 
            layout={HomePage}
            component={CartCTN}
             />
            <AppRoute 
            exact 
            path="/profiles" 
            layout={HomePage}
            component={Profiles}
             />
            <AppRoute 
            exact 
            path="/dangky" 
            layout={HomePage}
            component={DangkyCTN}
             />
            <AppRoute 
            exact 
            path="/dangnhap" 
            layout={HomePage}
            component={LoginCTN}
             />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default PathRoute;
