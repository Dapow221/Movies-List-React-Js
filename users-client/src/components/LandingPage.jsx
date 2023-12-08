import bg from '../assets/footer-bg.jpg'
import './landing.scss'
import MovieCard from './MovieCard'


function LandingPage () {
  return (
    <>
    <div className="landing" style={{backgroundImage: `url(${bg})`}}>
      <MovieCard/>
    </div>
    </>
  )
}

export default LandingPage;