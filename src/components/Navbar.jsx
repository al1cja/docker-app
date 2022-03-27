import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.nav`
    background-color: #273552;
    height: 100%;
    display: flex;
    height: 50px;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15px;
`;

const LinkElement = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-size: 20px;

    &.active {
        color: #e8926f;
    }
`

const Navbar = () => (
    <NavbarWrapper>
        <LinkElement to="/">Timeline</LinkElement>
        <LinkElement to="/details">Details</LinkElement>
    </NavbarWrapper>
)

export default Navbar;