import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
    background-color: #180f59;
    height: 100%;
    display: flex;
    height: 40px;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15px;
`;

const LinkElement = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 5px;
    font-size: 20px;
`

const Navbar = () => (
    <NavbarWrapper>
        <LinkElement to="/">Timeline</LinkElement>
        <LinkElement to="/details">Details</LinkElement>
    </NavbarWrapper>
)

export default Navbar;