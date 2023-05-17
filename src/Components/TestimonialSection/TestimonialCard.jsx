import styled from "styled-components"


function TestimonialCard({userTestimony, userImg, userName, UserPosition}) {
  return (
    <TestimonyCard>
        <div className="card_wrapper">
            <p className="user_testimony">{userTestimony}</p>
            <div className="user">
                <div className="user_img">
                    <img src={userImg} alt="userImage" />
                </div>
                <div className="user_info">
                    <h5 className="user_info-name">{userName}</h5>
                    <p className="user_info-position">{UserPosition}</p>
                </div>
            </div>
        </div>
    </TestimonyCard>
  )
}


const TestimonyCard = styled.div`
.card_wrapper {
    padding: 1.5rem 2rem;
    width: 100%;
    max-width: 430px;
    margin: auto;
    background-color: var(--bodyBg);
    border-radius: 6px;
    box-shadow: var(--box-shadow);
}

    .card_wrapper .user {
        display: inline-flex;
        margin-top: 2rem;
    }

    .card_wrapper .user .user_info-position {
        font-size: .7rem;
    }


    .card_wrapper .user .user_img {
        max-width: 40px;
        margin-right: 1rem;
    }

    .card_wrapper .user .user_img img {
        border-radius: 50px;
    }

@media only screen and (max-width:768px) {
    .card_wrapper {
    max-width: 100%;
}
}
`

export default TestimonialCard