import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

function Newsletter() {
  return (
    <NewsletterSection id='Newsletter'>
        <div className="container">
            <div className="newsletter_wrapper">
                <div className="newsletter_info">
                    <h2 className="newsletter_info-title">Get early access today</h2>
                    <p className="newsletter_info-text">It only takes one minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <form action="#">
                    <input type="email" placeholder='email@example.com' required />
                    <Button type="submit"
                            text="Get Started For Free"
                    />
                </form>
            </div>
        </div>
    </NewsletterSection>
  )
}

const NewsletterSection = styled.div`
background-color: var(--sectionBg);
padding: 4rem 0 0 0;

.newsletter_wrapper {
    background-color: var(--bodyBg);
    max-width: 900px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 3rem;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    position: relative;
    top: 90px;
}

.newsletter_info {
    margin-bottom: 2.5rem;
}

.newsletter_info .newsletter_info-title {
    margin-bottom: 1rem;
}

.newsletter_wrapper form  {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.newsletter_wrapper form input {
    border: none;
    border-radius: 30px;
    background: var(--white);
    padding: .8rem 25px;
    width: 60%;
    outline: none;
}

.newsletter_wrapper form button {
    font-size: .8rem;
    padding: .9rem 2rem;
}

@media(max-width: 768px) {
padding: 2rem 0 0 0;

.newsletter_wrapper {
    max-width: 100%;
    padding: 2rem 1rem;
    top: 80px;
}

.newsletter_wrapper form  {
    flex-direction: column;
}

.newsletter_wrapper form input {
    width: 100%;
}

.newsletter_wrapper form button {
    width: 100%;
}
}
`

export default Newsletter