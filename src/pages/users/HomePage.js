import React, { Component } from 'react';
import Header from '../../components/users/header/Header';
import Search from '../../components/users/search/Search';

import Footer from '../../components/users/footer/Footer';
import '../../css/style.css';
import '../../css/user.css';
import '../../css/fixcss.css';
export class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                {this.props.children}
                {/* <News/> */}
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
