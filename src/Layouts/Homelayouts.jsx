import React from 'react';
import Navbar from '../Componenets/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componenets/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Homelayouts = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home | Tech Deal
                </title>
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Homelayouts;