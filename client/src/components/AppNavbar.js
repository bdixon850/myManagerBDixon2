import React from 'react';

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
                    <NavbarBrand href="/" className="mr-auto">myManager</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signin">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">Signup</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/profile">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contractor">Contractor</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/payment">Payment</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/*">NotFound</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default AppNavbar;