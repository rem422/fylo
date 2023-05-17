import styled from 'styled-components'

function FeaturesCard({img, title, text}) {
  return (
    <FeatureCard>
        <div className="card_wrapper">
            <img src={img} alt="img" className='card_img' />
            <h3 className="card_title">{title}</h3>
            <p className="card_text">{text}</p>
        </div>
    </FeatureCard>
  )
}

const FeatureCard = styled.div`
    max-width: 430px;
    width: 100%;
    margin: auto;
    text-align: center;

.card_wrapper .card_img {
  max-width: 100px;
  margin-bottom: 1rem;
}

.card_wrapper .card_title {
  margin-bottom: .6rem;
}

/* Media queries */
@media(max-width: 500px) {
  .card_wrapper .card_img {
    max-width: 80px;
    margin-bottom: 1rem;
  }
}




`








export default FeaturesCard