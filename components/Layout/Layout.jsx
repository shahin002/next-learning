import React from 'react';
import TopBar from "./includes/TopBar";
import SideBar from "./includes/SideBar";
import Footer from "./includes/Footer";

const Layout = ({children}) => {
    return (
        <>
            <TopBar/>
            <div id="layoutSidenav">
                <SideBar/>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Layout;