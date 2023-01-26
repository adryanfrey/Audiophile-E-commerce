// sass
import './footer.sass'

// hooks
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(page)
    window.scrollTo(0,0)
  }
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-container-1'>
          <h3>audiophile</h3>
          <p className='body'>
            Audiophile is an all in one stop to fulfill your audio needs. 
            We're a small team of music lovers and sound specialists who are devoted 
            to helping you get the most out of personal audio. Come and visit our demo 
            facility - we’re open 7 days a week.
          </p>
          <p className="body">
            &copy; Copyright 2021. All Rights Reserved
          </p>
        </div>

        <div className="footer-container-2">
          <nav>
            <ul>
              <li onClick={() => handleClick('/')}>Home</li>
              <li onClick={() => handleClick('headphones')}>headphones</li>
              <li onClick={() => handleClick('speakers')}>speakers</li>
              <li onClick={() => handleClick('earphones')}>earphones</li>
            </ul>
          </nav>

          <div className='social-media'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>  
        </div>
      </div>
    </footer>
  )
}

export default Footer