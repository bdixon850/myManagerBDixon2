import React from 'react';
import logo from '../images/IMG-6937.jpg';
import CSS from './Nav.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';


class AppNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href="/" className="mr-auto"><img src={logo} className="logo" alt="logopic" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/login" >Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contractor">Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/payment"></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/thankyou"></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default AppNavbar;