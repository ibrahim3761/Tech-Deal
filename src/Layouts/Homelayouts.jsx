import React from 'react';
import Navbar from '../Componenets/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componenets/Footer/Footer';

const Homelayouts = () => {
    return (
        <div>
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