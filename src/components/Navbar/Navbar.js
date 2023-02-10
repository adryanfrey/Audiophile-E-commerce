// sass
import './navbar.sass'

// hooks
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// assets
import img5 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img6 from '../../assets/home/desktop/earphones.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import chevron from '../../assets/home/desktop/chevron.png'

// hooks
import { useState, useEffect } from 'react'


const Navbar = ({ displayCart }) => {
  // states
  const [expand, setExpand] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const navigate = useNavigate('')

  // navigation
  const handleClick = (page) => {
    setExpand(false)
    navigate(page)
    window.scrollTo(0, 0)
  }

  // expand navbar
  const expandNavbar = () => {
    if (expand === false) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }

  useEffect(() => {
    const navbar = document.querySelector('.navbar-tablet')
    const filterNavbar = document.querySelector('.filter-navbar')

    if (expand === true) {
      navbar.style.display = 'flex'
      filterNavbar.style.display = 'block'
    } else {
      navbar.style.display = 'none'
      filterNavbar.style.display = 'none'
    }

  },[expand])

  // colapse navbar if window size > 1100px
  useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResizeWindow)
    
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  },[])

  if(windowWidth > 1150) {
    const navbar = document.querySelector('.navbar-tablet')
    const filterNavbar = document.querySelector('.filter-navbar') 
   
    if (navbar === null || filterNavbar === null) {
    } else {
      navbar.style.display = 'none'
      filterNavbar.style.display = 'none'
    }

  }

// back button on mobile navbar

  if(windowWidth > 650) {
    const back = document.querySelector('.back-navbar')
    if (back === null) {
    } else {
      back.style.display = 'none'
    }
  }

  if(windowWidth < 651) {
    const back = document.querySelector('.back-navbar')
    if (back === null) {
    } else {
      back.style.display = 'block'
    }
  }

  return (
    <header className='header'>
      <div className='header-container'>

        <div className="logo-container">
          <i onClick={expandNavbar} className="fa-solid fa-bars burguer"></i>
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

      <div className='navbar-tablet'>
        <div onClick={() => handleClick('headphones')} className='card1-container'>
          <img src={img7} alt="" />
          <div className='box-shadow'></div>
          <h6>headphones</h6>
          <button className='btn-3' >SHOP <img src={chevron} alt="chevron" /></button>
        </div>

        <div onClick={() => handleClick('speakers')} className='card1-container'>
          <img src={img5} alt="" />
          <div className='box-shadow'></div>
          <h6>speakers</h6>
          <button className='btn-3'>SHOP <img src={chevron} alt="chevron" />  </button>
        </div>

        <div onClick={() => handleClick('earphones')} className='card1-container'>
          <img src={img6} alt="" />
          <div className='box-shadow'></div>
          <h6>earphones</h6>
          <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
        </div>

        <div onClick={() => setExpand(false)} className='back-navbar'>
          Back
        </div>
      </div>

      <div className='filter-navbar'></div>

    </header>
  )
}

export default Navbar