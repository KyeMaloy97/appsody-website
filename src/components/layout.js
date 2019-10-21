import React from "react";

import Head from "./head"
import Navbar from "./navbar"
import Footer from "./footer"
import MobileNav from "./mobileNav";
import MobileSearchBar from "./mobileSearchBar";

export default ({ children }) => (
    <React.Fragment>
        <Head/>
        <Navbar/>
        { children }
        <MobileNav />
        {/* <MobileSearchBar /> */}
        <Footer/>
    </React.Fragment>
)
