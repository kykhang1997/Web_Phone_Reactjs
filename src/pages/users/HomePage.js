import React, { Component } from 'react';
import Header from '../../components/users/header/Header';
import Search from '../../components/users/search/Search';
import ListProductCTN from '../../containers/users/ListProductCTN';
import News from '../../components/users/tintuc/News';
import Footer from '../../components/users/footer/Footer';
import '../../css/style.css';
export class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <ListProductCTN/>
                <News/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
