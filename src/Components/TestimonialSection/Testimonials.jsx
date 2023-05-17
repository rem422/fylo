import styled from 'styled-components'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <TestimonialSection id='testimonials'>
        <div className="container">
            <div className="testimonials_wrapper">
                <TestimonialCard />
            </div>
        </div>
    </TestimonialSection>
  )
}

const TestimonialSection = styled.div`
    
`












export default Testimonials