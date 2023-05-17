import Logo from '../Logo'
import { Link } from 'react-scroll'
import locationImg from '../../images/icon-location.svg'
import phoneImg from '../../images/icon-phone.svg'
import emailImg from '../../images/icon-email.svg'
import { FaFacebookF ,FaTwitter, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'

function Footer() {
    
    const getYear = () => {
        return new Date().getFullYear();
    }

  return (
    <FooterSection>
        <div className="container">
            <Link to='hero' className='footer_logo'>
                <Logo />
            </Link>
            <div className="footer_wrapper">
                <div className="footer_info">
                    <div className="footer_location">
                        <img src={locationImg} alt="img" className="footer_img"/>
                        <p className="footer_location-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus rem, iste, est suscipit veritatis eaque necessitatibus.
                        </p>
                    </div>
                </div>
                <div className="footer_contacts">
                    <div className="footer_contact">
                        <img src={phoneImg} alt="img" className="footer_img"/>
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="footer_contact">
                        <img src={emailImg} alt="img" className="footer_img"/>
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <ul className="footer_links">
                    <li className="footer_link">
                        <Link to='/'>About Us</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Jobs</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Press</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Blog</Link>
                    </li>
                </ul>
                <ul className="footer_links">
                    <li className="footer_link">
                        <Link to='/'>Contact Us</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Terms</Link>
                    </li>
                    <li className="footer_link">
                        <Link to='/'>Privacy</Link>
                    </li>
                </ul>
                <div className="footer_socials">
                    <div className="footer_socials-icon">
                        <Link to='/'><FaFacebookF /></Link>
                    </div>
                    <div className="footer_socials-icon">
                        <Link to='/'><FaTwitter /></Link>
                    </div>
                    <div className="footer_socials-icon">
                        <Link to='/'><FaInstagram /></Link>
                    </div>
                </div>
            </div>
            <p className="footer_copyright">&copy;Copyright {getYear()} Fylo. All rights reserved</p>
        </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
    background-color: var(--footerBg);

.footer_logo {
    margin-top: 3rem;
    position: relative;
    top: 130px;
}

.footer_wrapper .footer_img {
    width: 15px;
    object-fit: contain;
}

.footer_wrapper {
    padding: 10rem 0 4rem 0;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 2rem;
}

.footer_wrapper .footer_info .footer_location {
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
}

.footer_wrapper .footer_info .footer_location .footer_location-text {
    width: 100%;
    max-width: 400px;
}

.footer_wrapper .footer_contacts .footer_contact {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 1rem;
}

.footer_wrapper .footer_links {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}

.footer_wrapper .footer_links  .footer_link {
    color: var(--textColor);
    margin-bottom: 1rem;
    transition: var(--transition);
}

.footer_wrapper .footer_links .footer_link:hover a {
    color: var(--white);
}

.footer_wrapper .footer_socials {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
}

.footer_wrapper .footer_socials {
    display: flex;
}

.footer_wrapper .footer_socials .footer_socials-icon a {
    display: inline-flex;
    margin-right: 1rem;
    color: var(--white);
    border: 2px solid var(--white);
    padding: .5rem;
    border-radius: 50%;
    transition: var(--transition);
}

.footer_wrapper .footer_socials .footer_socials-icon a:hover {
    color: var(--btnColor);
    border-color: var(--btnColor);
    transition: var(--transition);
}

.footer_copyright {
    font-size: .8rem;
    padding-bottom: 1rem;
}

@media only screen and (max-width:960px) {
.footer_wrapper {
    display: grid;
    grid-template-columns: repeat(4, auto);
}
}


@media(max-width: 768px) {
.footer_wrapper {
    display: grid;
    grid-template-columns: 100%;
}
}

























`




export default Footer