// sass
import './headphones.sass'

// assets
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import chevron from '../../assets/home/desktop/chevron.png'
import img5 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img6 from '../../assets/home/desktop/earphones.png'

// hooks
import { useNavigate } from 'react-router-dom'

// navigation
const Headphones = () => {
    const navigate = useNavigate()

    const handleClick = (page) => {
        navigate(page)
        window.scrollTo(0, 0)
    }

    return (
        <div className='headphones'>
            <header className='title'>
                <h3>headphones</h3>
            </header>

            <section className='group1'>
                <div className='mark2-img'>
                    
                </div>
                <div className='group1-text'>
                    <p className='overline'>new product</p>
                    <h2>XX99 Mark II Headphones</h2>
                    <p className='body first'>The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </p>
                    <button onClick={() => handleClick('/headphones/id:jbgy342ewgh2')} className='btn-1'>see product</button>
                </div>
            </section>

            <section className='group2'>
                <div className='group1-text-left'>
                    <h2>XX99 Mark I <br></br> Headphones</h2>
                    <p className='body'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and
                        accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
                    </p>
                    <button onClick={() => handleClick('/headphones/id:lkjnuwedsas1')} className='btn-1'>see product</button>
                </div>
                <div className='mark1-img'>
                    
                </div>
            </section>

            <section className='group3'>
                <div className='xx59-img'>
                    
                </div>
                <div className='group1-text'>
                    <h2>XX59 Headphones</h2>
                    <p className='body'>
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                    </p>
                    <button onClick={() => handleClick('/headphones/id:oiwedhsnas34')} className='btn-1'>see product</button>
                </div>
            </section>

            <section className='cards-container'>
                <div onClick={() => handleClick('/headphones')} className='card1-container'>
                    <img src={img7} alt="" />
                    <div className='box-shadow'></div>
                    <h6>headphones</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
                </div>

                <div onClick={() => handleClick('/speakers')} className='card1-container'>
                    <img src={img5} alt="" />
                    <div className='box-shadow'></div>
                    <h6>speakers</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" />  </button>
                </div>

                <div onClick={() => handleClick('/earphones')} className='card1-container'>
                    <img src={img6} alt="" />
                    <div className='box-shadow'></div>
                    <h6>earphones</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
                </div>
            </section>

            <section className='group4'>
                <div className='group4-text'>
                    <h2>bringing you the  <span>best</span> audio gear</h2>
                    <p className='body'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury  demonstration rooms available for you
                        to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
                        Audiophile the  best place to buy your portable audio equipment.</p>
                </div>
                <div className='group4-img'>
                    
                </div>
            </section>
        </div>
    )
}

export default Headphones