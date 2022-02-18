import React from 'react';
import Link from "next/link";

const SideBar = () => {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link href={'/'}>
                                <a className="nav-link">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <Link href={'/'}><a className="nav-link collapsed" data-toggle="collapse"
                                                data-target="#collapseLayouts" aria-expanded="false"
                                                aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a></Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                                 data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link href={'/'}><a className="nav-link">Static
                                        Navigation</a></Link>
                                    <Link href={'/'}><a className="nav-link">Light
                                        Sidenav</a></Link>
                                </nav>
                            </div>
                            <Link href={'/'}><a className="nav-link collapsed" data-toggle="collapse"
                                                data-target="#collapsePages" aria-expanded="false"
                                                aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a></Link>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                 data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link href={'/'}>
                                        <a className="nav-link collapsed" data-toggle="collapse"
                                           data-target="#pagesCollapseAuth" aria-expanded="false"
                                           aria-controls="pagesCollapseAuth">
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </a>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                         data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link href={'/'}><a className="nav-link">Login</a></Link>
                                            <Link href={'/'}><a className="nav-link"
                                            >Register</a></Link>
                                            <Link href={'/'}><a className="nav-link">Forgot
                                                Password</a></Link>
                                        </nav>
                                    </div>
                                    <Link href={'/'}><a className="nav-link collapsed" data-toggle="collapse"
                                                        data-target="#pagesCollapseError" aria-expanded="false"
                                                        aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i
                                            className="fas fa-angle-down"></i></div>
                                    </a></Link>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                         data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link href={'/'}><a className="nav-link">401 Page</a></Link>
                                            <Link href={'/'}><a className="nav-link">404 Page</a></Link>
                                            <Link href={'/'}><a className="nav-link">500 Page</a></Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <Link href={'/'}><a className="nav-link">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a></Link>
                            <Link href={'/'}><a className="nav-link">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a></Link>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
        </>
    )
        ;
};

export default SideBar;