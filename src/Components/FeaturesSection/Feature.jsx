import styled from 'styled-components'
import FeaturesCard from './FeaturesCard'

import accessImg from '../../images/icon-access-anywhere.svg'
import securityImg from '../../images/icon-security.svg'
import collaborationImg from '../../images/icon-collaboration.svg'
import anyFileImg from '../../images/icon-any-file.svg'

function Features() {
  return (
    <FeaturesSection id="features">
        <div className="container">
            <div className="features_wrapper">
                <FeaturesCard img={accessImg} 
                              title= "Access your files, anywhere"
                              text="The ability to use a smartphone, tablet, or computer to acces your account means your files follow you everwhere."
                />
                <FeaturesCard img={securityImg} 
                              title= "Security you can trust"
                              text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
                />
                <FeaturesCard img={collaborationImg} 
                              title= "Real-time collaboration"
                              text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
                />
                <FeaturesCard img={anyFileImg} 
                              title= "Store any type of file"
                              text="Whethere you're sharing holiday photos or work documents, Fylo has you covered for all file types to be securely stored and shared."
                />
            </div>
        </div>
    </FeaturesSection>
  )
}

const FeaturesSection = styled.div`
  background-color: var(--sectionBg);
  
  .features_wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-around;
    grid-gap: 6rem;
    padding: 4rem 0;
  }


/* Media queries */
  @media(max-width:768px) {
    .features_wrapper {
    grid-template-columns: 100%;
    justify-content: space-around;
    grid-gap: 4rem;
  }
  }









`

export default Features