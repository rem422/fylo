

function TestimonialCard({userTestimony, userImg, userName, UserPosition}) {
  return (
    <TestimonialCard>
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
    </TestimonialCard>
  )
}

export default TestimonialCard