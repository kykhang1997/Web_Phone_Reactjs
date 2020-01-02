import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePageAd from '../pages/admin/HomePageAd';
import AppRoute from './AppRoute';
import HomePage from '../pages/users/HomePage';
import HomeAd from '../components/admin/main/Home';
import CategoryFormCTN   from '../containers/admin/CategoryFormCTN';
import ListProductCTN from "../containers/users/ListProductCTN";
import  ProductDetailsCTN  from "../containers/users/ProductDetailsCTN";
import CartCTN from "../containers/users/CartCTN";
import DangkyCTN from "../containers/users/DangkyCTN";
import LoginCTN from "../containers/users/LoginCTN";
import ProfileUserCTN from "../containers/users/ProfileUserCTN";
import CategoryCTN from "../containers/admin/CategoryCTN";
import ProductsCTN from "../containers/admin/ProductsCTN";
import  UserCTN  from "../containers/admin/UserCTN";
import  BillCTN  from "../containers/admin/BillCTN";
import ProductsFormCTN from "../containers/admin/ProductsFormCTN";
import BillFormCTN from "../containers/admin/BillFormCTN";
import  LoginPageAd  from "../pages/admin/LoginPageAd";
import  LoginAdCTN  from "../containers/admin/LoginAdCTN";
export class PathRoute extends Component {
  render() {
    return (
        <Router>
          <Switch>
          <AppRoute
              exact
              path="/admin"
              layout={LoginPageAd}
              component={LoginAdCTN}
            />
            <AppRoute
              exact
              path="/admin/Home"
              layout={HomePageAd}
              component={HomeAd}
            />
            {/* category */}
            <AppRoute
              exact
              path="/admin/category"
              layout={HomePageAd}
              component={CategoryCTN}
            />
            <AppRoute
              exact
              path="/admin/category/add"
              layout={HomePageAd}
              component={CategoryFormCTN}
            />
            <AppRoute
              exact
              path="/admin/category/:id/edit"
              layout={HomePageAd}
              component={CategoryFormCTN}
            />
            {/* product */}
            <AppRoute
              exact
              path="/admin/product"
              layout={HomePageAd}
              component={ProductsCTN}
            />
            <AppRoute
              exact
              path="/admin/product/add"
              layout={HomePageAd}
              component={ProductsFormCTN}
            />
            <AppRoute
              exact
              path="/admin/product/:id/edit"
              layout={HomePageAd}
              component={ProductsFormCTN}
            />
            <AppRoute
              exact
              path="/admin/users"
              layout={HomePageAd}
              component={UserCTN}
            />
            <AppRoute
              exact
              path="/admin/bill"
              layout={HomePageAd}
              component={BillCTN}
            />
            <AppRoute
              exact
              path="/admin/bill/:id/edit"
              layout={HomePageAd}
              component={BillFormCTN}
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
            component={ProfileUserCTN}
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
    );
  }
}

export default PathRoute;
