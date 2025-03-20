"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header, single }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 single={single} />;
    case 2:
      return <Header2 single={single} />;
    case 3:
      return <Header3 single={single} />;
    case 5:
      return <Header5 single={single} />;
    case 6:
      return <Header6 single={single} />;
    default:
      return <Header6 single={single} />;
  }
};
export default Header;

const Menu = ({ single, menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "programs", title: "Programs" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
      ];
  return (
    <Fragment>
      {single ? (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {singleMenu.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="has-dropdown">
            <Link href="#">
                About Us
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
              <li>
                      <Link href="/about/aboutus">About Swahilipot</Link>
                    </li>
                    <li>
                      <Link href="/about/origin">Our Origin Story</Link>
                    </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link href="#">
                Programs
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
              <li>
                      <Link href="/programs/case-management">Case Management</Link>
                    </li>
                    <li>
                      <Link href="/programs/mtourism-lab">Mombasa Tourism Innovation Lab</Link>
                    </li>
                    <li>
                      <Link href="/programs/events">Events</Link>
                    </li>
                    <li>
                      <Link href="/programs/campus-abs-program">Campus Ambassador Program</Link>
                    </li>
                    <li>
                      <Link href="/programs/swahili-tech">Swahili Tech Woman</Link>
                    </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link href="#">
                Departments
                <i className="fas fa-angle-down" />
              </Link>
              <ul className="submenu">
              <li>
              <Link href="/Departments/Communications">Communications</Link>
              </li>
              <li>
                <Link href="/Departments/Technology">Technology</Link>
              </li>
              <li>
                <Link href="/Departments/Engineering">Engineering Team</Link>
              </li>
              <li>
                <Link href="/Departments/Creatives">Creatives</Link>
              </li>
              <li>
                <Link href="/Departments/Community">Community Experience</Link>
              </li>
              </ul>
            </li>
            <li>
              <Link href="https://medium.com/@swahilipotengineering" target="_blank" rel="noopener noreferrer">
                Blog
              </Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "programs", title: "Programs" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-xl-none">
              <a
                href="/"
                className="border-none"
                onClick={() => activeMenuSet("home")}
              >
                Home
              </a>
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <a href="#" onClick={() => activeMenuSet("About Us")}>
                    About Us
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("About Us")}>
                    <li>
                      <Link href="/about/aboutus">About Swahilipot</Link>
                    </li>
                    <li>
                      <Link href="/about/origin">Our Origin Story</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("About Us")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Programs")}>
                    Programs
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Programs")}>
                    <li>
                      <Link href="/programs/case-management">Case Management</Link>
                    </li>
                    <li>
                      <Link href="/programs/mtourism-lab">Mombasa Tourism Innovation Lab</Link>
                    </li>
                    <li>
                      <Link href="/programs/events">Events</Link>
                    </li>
                    <li>
                      <Link href="/programs/campus-abs-program">Campus Ambassador Program</Link>
                    </li>
                    <li>
                      <Link href="/programs/swahili-tech">Swahili Tech Woman</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Programs")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="#" onClick={() => activeMenuSet("Departments")}>
                    Departments
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Departments")}>
                  <li>
                    <Link href="/Departments/Communications">Communications</Link>
                  </li>
                  <li>
                    <Link href="/Departments/Technology">Technology</Link>
                  </li>
                  <li>
                    <Link href="/Departments/Engineering">Engineering Team</Link>
                  </li>
                  <li>
                    <Link href="/Departments/Creatives">Creatives</Link>
                  </li>
                  <li>
                    <Link href="/Departments/Community">Community Experience</Link>
                  </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Departments")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@swahilipotengineering" target="_blank" rel="noopener noreferrer" onClick={() => activeMenuSet("Blog")}>
                    Blog
                  </a>
                </li>
                <li className="mean-last">
                  <Link href="/contact">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/sphlogo.svg" alt="logo-img" width={250} height={30} />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu single={single} menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
              Swahilipot Hub Foundation empowers young minds through technology, arts, and heritage, fostering innovation and community growth.
              </p>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                      Opp. Governor's Office, Mombasa
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:partnership@swahilipothub.co.ke">partnership@swahilipothub.co.ke</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+254 11 4635505">+254 11 4635505</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    Contact Us
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/Swahilipothub/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://twitter.com/swahilipothub">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.youtube.com/@swahilipothubfoundation">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.linkedin.com/company/swahilipot-hub">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const Header1 = ({ single, menu }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img
                    src="/assets/img/logo/sphlogo.svg"
                    alt="logo-img"
                    className="logo-1"
                    height={30}
                    width={300}
                  />
                </Link>
                <Link href="/">
                  <img
                    src="/assets/img/logo/sphlogo.svg"
                    alt="logo-img"
                    className="logo-2"
                    height={30}
                    width={300}
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+254 11 4635505">+254 11 4635505</a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
      />
    </Fragment>
  );
};

const Header2 = ({ single }) => {
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "programs", title: "Programs" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "testimonial", title: "Testimonial" },
  ];

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/sphlogo.svg" alt="logo-img" width={300} height={30} />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header3 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "programs", title: "Programs" },
    { id: 1, href: "about", title: "About" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "testimonial", title: "Testimonial" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/sphlogo.svg" alt="logo-img" width={300} height={30} />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+254 11 4635505">+254 11 4635505</a>
                    </h4>
                  </div>
                </div>
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header5 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "programs", title: "Programs" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "contact", title: "Contact" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-6">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/" className="logo-1">
                  <img src="/assets/img/logo/sphlogo.svg" alt="logo-img" />
                </Link>
                <Link href="/" className="logo-2">
                  <img src="/assets/img/logo/sphlogo.svg" alt="logo-img" width={300} height={30} />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header6 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "programs", title: "Programs" },
    { id: 3, href: "feature", title: "Feature" },
    { id: 4, href: "pricing", title: "Pricing" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/sphlogo.svg" alt="logo-img" width={300} height={30} />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};