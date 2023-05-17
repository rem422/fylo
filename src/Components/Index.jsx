import NavbarSection from './NavbarSection/Navbar'
import HeroSection from './HeroSection/Hero'
import FeaturesSection from './FeaturesSection/Feature'
import TeamSection from './TeamSection/Team'
import TestimonialsSection from './TestimonialSection/Testimonials'
import NewsletterSection from './NewsletterSection/Newsletter'
import FooterSection from './FooterSection/Footer'
import ScrollBtn from './ScrollBtn/ScrollBtn'

function Index() {
  return (
    <>
        <ScrollBtn />
        <NavbarSection />
        <HeroSection />
        <FeaturesSection />
        <TeamSection />
        <TestimonialsSection />
        <NewsletterSection />
        <FooterSection />
    </>
  )
}

export default Index