import './Card.css';

function Card() {
  const name = "Sarah Dole";
  const socialAt = "@sarahdole"
  const content = 
    "I've been searching for high-quality abstract images for my design projects," +
    "and I'm trilled to have found this platform. " + 
    "The variety and depth of creativity if astounding!"

  return (
    <div className='card'>
        <div className='card__info'>
          <img src="./src/assets/profile-thumbnail.png" />
          <div className='card__info__name'>
            <div className='card__info__name--text'>
              <span>{ name }</span>
            </div>
            <div className='card__info__name--at'>
              <span>{ socialAt }</span>
            </div>
          </div>
        </div>
        <div className='card__content'>
          { content }
        </div>
    </div>
  )
}

export default Card;