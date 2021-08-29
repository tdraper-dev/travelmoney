import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

import { MDBIcon } from "mdbreact";


function SideNav(props) {

    const {navBar, handleNav } = props

    return (
        <div id="sidebar" className="sidebar col-4 col-lg-3" aria-label="sidebar" aria-hidden={navBar}>
            <div className="sidebar_content">
                <button id="sidebarToggle" data-toggle-sidebar="sidebar1" aria-label="sidebar" rotate={navBar} className="toggleTest" onClick={handleNav} >
                    <MDBIcon icon="arrow-right" size="2x" />
                </button>
                <h1 className="navTitle">Travel Money</h1>
                <div className="sidebarRow px-2 row">
                    <div className="linkCol">
                        <Link className="navLink" to="/">Dashboard</Link>
                    </div>
                    <div className="linkCol">
                        <a className="navLink" href="#chartTag">Conversion Chart</a>
                    </div>
                    <div className="linkCol">
                        <a className="navLink" href="#graphTag">Conversion Graph</a>
                    </div>
                    <div className="linkCol">
                        <a className="navLink" href="#destinationsTag">Chance Destinations</a>
                    </div>
                    <div className="linkCol">
                    <a  className="navLink navLinkSpecial" rel="noreferrer" href="https://tdraper-dev.github.io/tdraper.dev/" target="_blank">Made by Travis Draper</a>
                    </div>
                    <div className="socialMediaFooter d-flex">
                        <a href="https://www.linkedin.com/in/tdraper-dev/" target="_blank" rel="noreferrer" title="Link to Travis Draper LinkedIn page" className="mx-2">
                            <MDBIcon fab icon="linkedin" className="footerIcon" />
                        </a>
                        <a href="https://github.com/tdraper-dev" target="_blank" rel="noreferrer" title="Link to Travis Draper Github Page" className="mx-2">
                            <MDBIcon fab icon="github"  className="footerIcon"  />
                        </a>
                    </div>             
                </div>
            </div>
        </div>
    )
}
 
function SmallNav() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link id="homeButton" to="/">Travel Money</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#chartTag">Conversion Chart</Nav.Link>
                        <Nav.Link href="#graphTag">Conversion Graph</Nav.Link>
                        <Nav.Link href="#destinationsTag">Chance Destinations</Nav.Link>
                        <Nav.Link  href="https://tdraper-dev.github.io/tdraper.dev/" target="_blank">Made by Travis Draper</Nav.Link >
                        <div className="socialMediaFooter d-flex">
                            <a href="https://www.linkedin.com/in/tdraper-dev/" target="_blank" rel="noreferrer" title="Link to Travis Draper LinkedIn page" className="mx-2">
                                <MDBIcon fab icon="linkedin" className="footerIcon" />
                            </a>
                            <a href="https://github.com/tdraper-dev" target="_blank" rel="noreferrer" title="Link to Travis Draper Github Page" className="mx-2">
                                <MDBIcon fab icon="github"  className="footerIcon"  />
                            </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}


export class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBar: 'true',
        }
        this.handleNav = this.handleNav.bind(this);
    }

    handleNav() {
        this.setState({ navBar: this.state.navBar === 'false' ? 'true' : 'false' })
        document.getElementById('sidebarToggle').setAttribute("transform", "rotate(180deg)")
    }

    render() {
        const screenWidth = this.props.screenWidth;
        const navBar = this.state.navBar;
        return (
            <>
            {screenWidth 
                ? <SideNav navBar={navBar} handleNav={this.handleNav} />
                : <SmallNav />
            }
            </>
        )

    }
}

export function Footer(props) {
   const {location} = props;

    return (
        <div id="socialMediaFooter" className={location}>
            <a href="https://www.linkedin.com/in/tdraper-dev/" target="_blank" rel="noreferrer" title="Link to Travis Draper LinkedIn page" className="mx-2">
                <MDBIcon fab icon="linkedin" className="footerIcon" />
            </a>
            <a href="https://github.com/tdraper-dev" target="_blank" rel="noreferrer" title="Link to Travis Draper Github Page" className="mx-2">
            <MDBIcon fab icon="github"  className="footerIcon"  />
            </a>
        </div>
    )
}