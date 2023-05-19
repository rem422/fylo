import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [Navbar, setNavbar] = useState(false);
  // navbar scrollchangeBackground function
  const changeBg = () => {
    if (window.scrollY > 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBg();
    // adds the event when scroll change background
    window.addEventListener("scroll", changeBg);
  }, []);

  // Shows the Menu button when the screen size is equal to or less than 760px
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      },
      []
    );
  });

  // Shows the Navmenu
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavbarSection className={Navbar ? "sticky" : undefined}>
      <div className="container">
        <div className="nav">
          <Link to="hero">
            <Logo />
          </Link>
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? "open" : undefined}>
              {isMobile && (
                <div
                  className="close_icon"
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
              <ul>
                <li>
                  <Link to="hero" onClick={() => setIsNavOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="features" onClick={() => setIsNavOpen(false)}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="team" onClick={() => setIsNavOpen(false)}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="testimonials" onClick={() => setIsNavOpen(false)}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="Newsletter" onClick={() => setIsNavOpen(false)}>
                    Sign In
                  </Link>
                </li>
              </ul>
            </nav>
            {isMobile && (
              <div
                className="menu_icon"
                tabIndex="0"
                role="button"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </NavbarSection>
  );
}

const NavbarSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
  -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%)
    brightness(140%);
  background-color: transparent;
  backdrop-filter: blur(30px);
  transition: var(--transition);
  z-index: 999;

  &.sticky {
    background-color: var(--footerBg);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  nav ul li {
    display: inline-block;
    margin: 0 0.5rem;

    a {
      display: inline-block;
      padding: 0.5rem 1rem;
      color: var(--textColor);
      font-weight: 500;
      transition: var(--transition);

      &:hover {
        color: var(--white);
        text-decoration: underline;
      }
    }
  }

  .menu_icon,
  .close_icon {
    cursor: pointer;
    padding: 3px;
    font-size: 1.4rem;
    transition: 0.3s ease;
    svg {
      color: var(--textColor);
    }
  }

  .close_icon {
    position: absolute;
    right: 24px;
    top: 22px;
    transition: all 0.3s ease;
    &:hover {
      svg {
        color: var(--white);
      }
    }
  }

  /* Media queries */
  @media (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0%;
      background-color: var(--footerBg);
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      overflow: hidden;
    }

    nav.open {
      transform: translateX(0%);
    }

    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;

      a {
        display: block;
        width: 100%;
      }
    }
  }
`;

export default Navbar;
