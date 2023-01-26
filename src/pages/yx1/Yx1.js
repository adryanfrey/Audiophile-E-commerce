// sass
import './yx1.sass'

// assets
import img1 from '../../assets/Bitmap16.png'
import img2 from '../../assets/Bitmap17.png'
import img3 from '../../assets/Bitmap18.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import img8 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img9 from '../../assets/home/desktop/earphones.png'
import chevron from '../../assets/home/desktop/chevron.png'


// hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Yx1 = ({ addItem }) => {

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
        <div className='yx1'>
            <div className='black-bg'></div>
            <div className='go-back'><Link className='body' to='/earphones'>Go Back</Link></div>
            <section className='product'>
                <div className='product-yx1'>
                    
                </div>
                <div className='product-text'>
                    <p className='overline'>new product</p>
                    <h2>YX1 WIRELESS <br></br>EARPHONES</h2>
                    <p className='body'>
                        Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <p className='body price'>$ 599</p>
                    <div>
                        <div className='quantity'>
                            <p className='body symbols' onClick={() => handleQuantity('-')}>-</p>
                            <p className='body number'>{quantity}</p>
                            <p className='body symbols' onClick={() => handleQuantity('+')}>+</p>
                        </div>
                        <button onClick={() => handleCart({ name: 'YX1 EARPHONES', price: 599, quantity: quantity })} className='btn-1'>add to cart</button>
                    </div>
                </div>
            </section>
            <section className='features'>
                <div className='features-text'>
                    <h3>features</h3>
                    <p className='body'>
                        Experience unrivalled stereo sound thanks to innovative acoustic technology.
                        With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely
                        crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional
                        noise isolation and truly immersive sound.
                    </p>
                    <p className='body'>
                        The YX1 Wireless Earphones features customizable controls for volume, music, calls,
                        and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28
                        hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant
                        design now available in an all new white and grey color scheme as well as the popular classic black.
                    </p>
                </div>
                <div className='features-box'>
                    <h3>in the box</h3>
                    <p className='body'>
                        <span>2x</span>
                        Earphone Unit
                    </p>

                    <p className='body'>
                        <span>6x</span>
                        Multi-size Earplugs
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        User Manual
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        USB-C Charging Cable
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        Travel Pouch
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
                        <div className="mark1-img"></div>
                        <h4>xx99 mark I</h4>
                        <button onClick={() => handleClick('/headphones/id:lkjnuwedsas1')} className='btn-1'>see product</button>
                    </div>

                    <div className='other-products-card'>
                        <div className="xx59-img"></div>
                        <h4>XX59</h4>
                        <button onClick={() => handleClick('/headphones/id:oiwedhsnas34')} className='btn-1'>see product</button>
                    </div>

                    <div className='other-products-card'>
                        <div className="zx9-img"></div>
                        <h4>zx9 speaker</h4>
                        <button onClick={() => handleClick('/speakers/id:yubdwudasas3')} className='btn-1'>see product</button>
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

export default Yx1