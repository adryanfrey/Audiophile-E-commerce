// sass
import './navbar.sass'

// hooks
import { Link } from 'react-router-dom'


const Navbar = ({displayCart}) => { 

  return (
    <header className='header'>
      <div className='header-container'>
        
        <div className="logo-container">
          <i className="fa-solid fa-bars burguer"></i>
          <h4>audiophile</h4>
        </div>
        <div className='navbar-container'>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='headphones'>Headphones</Link></li>
              <li><Link to='speakers'>Speakers</Link></li>
              <li><Link to='earphones'>Earphones</Link></li>
            </ul>
          </nav>
        </div>
        <div onClick={() => displayCart()} className='icon-container'>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

    </header>
  )
}

export default Navbar