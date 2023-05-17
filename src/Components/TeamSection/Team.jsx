import styled from "styled-components"
import { Link } from 'react-scroll';
import teamImg from '../../images/illustration-stay-productive.png'
import { FaChevronCircleRight } from 'react-icons/fa'

function Team() {
  return (
    <TeamSection id="team">
        <div className="container">
            <div className="team_wrapper">
                <div className="team_wrapper-img">
                    <img src={teamImg} alt="img" />
                </div>
                <div className="team_wrapper-info">
                    <h1 className="team_title">Stay productive, <br /> wherever you are</h1>
                    <p className="team_text">Never let location be an issue when accessing your files. Fylo has you covered for all your file storage needs.</p>
                    <p className="team_text">Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachment required</p>
                    <Link to="/">See how Fylo works <FaChevronCircleRight /></Link>
                </div>
            </div>
        </div>
    </TeamSection>
  )
}

const TeamSection = styled.div`
background: var(--sectionBg);

.team_wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    grid-gap: 4rem;
    padding: 6rem 0;
}

.team_wrapper-img {
    max-width: 500px;
    margin: 0 auto;
}

.team_wrapper-info {
    width: 100%;
    max-width: 600px;

.team_text {
        margin: 1.5rem 0;
    }
    
    a {
        display: inline-flex;
        align-items: center;
        text-decoration: underline;
        color: var(--btnColor);
        transition: var(--transition);
        svg {
            margin-left: .4rem;
        }
        &:hover {
            text-decoration: none;
            color: var(--white);
        }
    }
}


@media only screen and (max-width:960px) {
.team_wrapper {
    grid-template-columns: 100%;
    grid-gap: 3rem;
    padding: 4rem 0;
}

.team_wrapper-info {
    text-align: center;
    max-width: 100%;
}
}

@media only screen and (max-width:500px) {
    .team_wrapper-info .team_title {
        font-size: 1.6rem;
    }
}









`







export default Team