// sass
import './home.sass'

// assets
import img2 from '../../assets/home/desktop/image-earphones-yx1.jpg'
import img5 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img6 from '../../assets/home/desktop/earphones.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import chevron from '../../assets/home/desktop/chevron.png'


// hooks
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {

  const navigate = useNavigate()

  const handleClick = (page) => {
    navigate(page)
    window.scrollTo(0, 0)
  }

  // animations
  useEffect(() => {

  })

  return (
    <div className='home'>
      <main className='home-main'>
        <div className='space'></div>
        <div className='home-main-container1'>
          <p className='overline'>NEW PRODUCT</p>
          <h1>XX99 Mark II <br></br> Headphones</h1>
          <p className="body">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='btn-1' onClick={() => handleClick('/headphones/id:jbgy342ewgh2')}>See Product</button>
        </div>
      </main>

      <section className='home-section'>
        <div className='cards-container'>
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
        </div>

        <div className='group1'>
          <div className='group1-container'>
            <img src={img5} alt="" />
            <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='circle3'></div>
          </div>
          <div className='group1-container'>
            <div className='group1-container-text'>
              <h1>ZX9 <br></br> speaker</h1>
              <p className='body'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <button onClick={() => handleClick('/speakers/id:yubdwudasas3')} className='btn-2'>see product</button>
            </div>
          </div>
        </div>

        <div className="group2">
          <h3>ZX7 Speaker</h3>
          <button onClick={() => handleClick('/speakers/id:gusajhdascsa56')} className='btn-2'>see product</button>
        </div>

        <div className="group3">
          <div className='group3-container'>
            <img src={img2} alt="" />
          </div>
          <div className='group3-container gray-bg'>
            <h3>yx1 earphones</h3>
            <button onClick={() => handleClick('/earphones/id:alskdnase324a')} className='btn-2'>see product</button>
          </div>
        </div>

        <div className='group4'>
          <div className='group4-text'>
            <h2>bringing you the  <span>best</span> audio gear</h2>
            <p className='body'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
              to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
              Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <div className='group4-img'>
            
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home