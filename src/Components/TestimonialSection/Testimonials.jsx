import styled from 'styled-components'
import TestimonialCard from './TestimonialCard'

import BgQuote from '../../images/bg-quotes.png'
import profile1 from '../../images/profile-1.jpg'
import profile2 from '../../images/profile-2.jpg'
import profile3 from '../../images/profile-3.jpg'

function Testimonials() {
  return (
    <TestimonialSection id='testimonials'>
        <div className="container">
            <div className="testimonials_wrapper">
                <img src={BgQuote} alt="" className='bgimg' />
                <TestimonialCard
                    userTestimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
                    userImg={profile1}
                    userName='Satish Patel'
                    UserPosition='Founder & CEO Huddle'
                />
                <TestimonialCard
                    userTestimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
                    userImg={profile2}
                    userName='Bruce McKenzie'
                    UserPosition='Founder & CEO Huddle'
                />
                <TestimonialCard
                    userTestimony="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine."
                    userImg={profile3}
                    userName='Iva Boyd'
                    UserPosition='Founder & CEO Huddle'
                />
            </div>
        </div>
    </TestimonialSection>
  )
}

const TestimonialSection = styled.div`
    background-color: var(--sectionBg);
    padding: 8rem 0;

    .testimonials_wrapper {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 1.5rem;
        position: relative;
        z-index: 1;
    }

    .testimonials_wrapper .bgimg {
        content: '';
        position: absolute;
        left: -5px;
        top: -30px;
        height: 40px;
        width: 50px;
        z-index: -1;
    }


@media only screen and (max-width:960px) {
    .testimonials_wrapper {
        grid-template-columns: repeat(2, auto);
        grid-gap: 1.5rem;
    }
}

@media only screen and (max-width:768px) {
    padding: 4rem 0;

    .testimonials_wrapper {
        grid-template-columns: repeat(1, auto);
    }
}






`












export default Testimonials