import profilePic from './assets/profile.jpg'

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" className='card-image'/>
      <h2 className='card-title'>Atilla</h2>
      <p className='card-text'>I am an apprentice software developer and I love skiing</p>
    </div>
  );
}

export default Card;
