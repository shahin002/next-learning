import React from 'react';
import TopBar from "./includes/TopBar";

const Layout = ({children}) => {
    return (
        <>
            <TopBar/>
            {children}
        </>
    );
};

export default Layout;