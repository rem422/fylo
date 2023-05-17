import styled from 'styled-components'
import heroImg from '../../images/illustration-intro.png'
import heroBg from '../../images/bg-curvy-desktop.svg'
import heroMobileBg from '../../images/bg-curvy-mobile.svg'
import Button from '../Button/Button'

function Hero() {
  return (
    <HeroSection id='hero'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_img">
                    <img src={heroImg} alt="img" />
                </div>
                <div className="hero_info">
                    <h1 className="hero_info-title">All your files in one secure location, accessible anywhere.</h1>
                    <p className="hero_info-text">
                        Fylo stores all your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends, family and co-workers.
                    </p>
                    <Button text='Get Started' />
                </div>
            </div>
        </div>
    </HeroSection>
  )
}

const HeroSection = styled.div`
    background: url(${heroBg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    margin: 6rem 0 0 0;

    .hero_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .hero_img {
        max-width: 800px;
    }

    .hero_img img {
        width: 100%;
        height: auto;
    }

    .hero_info {
        max-width: 600px;
        width: 100%;
        margin: auto;
        text-align: center;
        margin: 3rem;
    }

    .hero_info .hero_info-text {
        max-width: 500px;
        width: 100%;
        margin: 3rem auto 2rem auto;
    }

    .hero_info button {
        margin-bottom: 3rem;
    }

@media only screen and (max-width: 500px) {
background: url(${heroMobileBg});
background-repeat: no-repeat;
background-position: bottom;
background-size: contain;

.hero_info {
    max-width: 100%;
}

.hero_info .hero_info-title {
    font-size: 1.4rem;
}

.hero_info .hero_info-text {
    max-width: 100%;
    width: 100%;
    margin: 1.5rem auto;
}
}







`



export default Hero