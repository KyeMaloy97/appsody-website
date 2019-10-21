import React from "react";

import { Link } from "gatsby";

import search from "./search";
import { Search } from "js-search";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MobileSearchBar = () => (
<React.Fragment>
    <Nav>
        <Search/>
    </Nav>
</React.Fragment>
)

export default MobileSearchBar;