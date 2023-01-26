// sass
import './zx9.sass'

// assets
import img1 from '../../assets/Bitmap10.png'
import img2 from '../../assets/Bitmap11.png'
import img3 from '../../assets/Bitmap12.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import img8 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img9 from '../../assets/home/desktop/earphones.png'
import chevron from '../../assets/home/desktop/chevron.png'


// hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Zx9 = ({ addItem }) => {

    // states
    const [quantity, setQuantity] = useState(0)


    const handleQuantity = (p) => {

        if (p === '-') {
            if (quantity === 0) return
            setQuantity((prevState) => prevState - 1)
        } else {
            setQuantity((prevState) => prevState + 1)
        }
    }

    // navigation
    const navigate = useNavigate()

    const handleClick = (page) => {
        navigate(page)
        window.scrollTo(0, 0)
    }

    // add item to the cart
    const handleCart = (product) => {
        addItem(product)
        setQuantity(0)
    }

    return (
        <div className='zx9'>
            <div className='black-bg'></div>
            <div className='go-back'><Link className='body' to='/speakers'>Go Back</Link></div>
            <section className='product'>
                <div className='product-zx9'>
                    
                </div>
                <div className='product-text'>
                    <p className='overline'>new product</p>
                    <h2>ZX9 <br></br>SPEAKER </h2>
                    <p className='body'>
                        Upgrade your sound system with the all new ZX9 active speaker. It’s a
                        bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities
                        for more pleasing and practical audio setups.
                    </p>
                    <p className='body price'>$ 4500</p>
                    <div>
                        <div className='quantity'>
                            <p className='body symbols' onClick={() => handleQuantity('-')}>-</p>
                            <p className='body number'>{quantity}</p>
                            <p className='body symbols' onClick={() => handleQuantity('+')}>+</p>
                        </div>
                        <button onClick={() => handleCart({ name: 'ZX9 SPEAKER', price: 4500, quantity: quantity })} className='btn-1'>add to cart</button>
                    </div>
                </div>
            </section>
            <section className='features'>
                <div className='features-text'>
                    <h3>features</h3>
                    <p className='body'>
                        Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B,
                        stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching.
                        Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                    </p>
                    <p className='body'>
                        Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter.
                        Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy
                        equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since
                        it can respond to even the subtle waveforms.
                    </p>
                </div>
                <div className='features-box'>
                    <h3>in the box</h3>
                    <p className='body'>
                        <span>1x</span>
                        Speaker Unit
                    </p>

                    <p className='body'>
                        <span>2x</span>
                        Speaker Cloth Panel
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        User Manual
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        3.5mm 10m Audio Cable
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        10m Optical Cable
                    </p>
                </div>
            </section>

            <section className='images'>
                <div className='images-container1'>
                    <div className='images-container1-img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='images-container1-img2'>
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className='images-container2'>
                    <img src={img3} alt="" />
                </div>
            </section>

            <section className='other-products'>
                <h3>You may also like</h3>
                <div className='imgs-container'>
                    <div className='other-products-card'>
                        <div className="zx7-img"></div>
                        <h4>zx7 speaker</h4>
                        <button onClick={() => handleClick('/speakers/id:gusajhdascsa56')} className='btn-1'>see product</button>
                    </div>

                    <div className='other-products-card'>
                        <div className="mark1-img"></div>
                        <h4>XX99 mark I</h4>
                        <button onClick={() => handleClick('/headphones/id:lkjnuwedsas1')} className='btn-1'>see product</button>
                    </div>

                    <div className='other-products-card'>
                        <div className="xx59-img"></div>
                        <h4>xx59</h4>
                        <button onClick={() => handleClick('/headphones/id:oiwedhsnas34')} className='btn-1'>see product</button>
                    </div>
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
                    <img src={img8} alt="" />
                    <div className='box-shadow'></div>
                    <h6>speakers</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" />  </button>
                </div>

                <div onClick={() => handleClick('/earphones')} className='card1-container'>
                    <img src={img9} alt="" />
                    <div className='box-shadow'></div>
                    <h6>earphones</h6>
                    <button className='btn-3'>SHOP <img src={chevron} alt="chevron" /> </button>
                </div>
            </section>

            <section className='group4'>
                <div className='group4-text'>
                    <h2>bringing you the <br></br> <span>best</span> audio gear</h2>
                    <p className='body'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury <br></br> demonstration rooms available for you
                        to browse and <br></br> experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
                        Audiophile the <br></br> best place to buy your portable audio equipment.</p>
                </div>
                <div className='group4-img'>
                    
                </div>
            </section>

        </div>
    )
}

export default Zx9