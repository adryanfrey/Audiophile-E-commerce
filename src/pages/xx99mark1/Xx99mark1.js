// sass
import './xx99mark1.sass'

// assets
import img1 from '../../assets/Bitmap4.png'
import img2 from '../../assets/Bitmap5.png'
import img3 from '../../assets/Bitmap6.png'
import img7 from '../../assets/home/desktop/image-removebg-preview(41).png'
import img8 from '../../assets/home/desktop/image-removebg-preview(38).png'
import img9 from '../../assets/home/desktop/earphones.png'
import chevron from '../../assets/home/desktop/chevron.png'

// hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const XX99mark1 = ({ addItem }) => {

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
        <div className='xx99mark1'>
            <div className='black-bg'></div>
            <div className='go-back'><Link className='body' to='/headphones'>Go Back</Link></div>
            <section className='product'>
                <div className='product-mark1'>
                   
                </div>
                <div className='product-text'>
                    <h2>XX99 Mark I <br></br>Headphones </h2>
                    <p className='body'>
                        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate
                        audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios
                        and on the go.
                    </p>
                    <p className='body price'>$ 1750</p>
                    <div>
                        <div className='quantity'>
                            <p className='body symbols' onClick={() => handleQuantity('-')}>-</p>
                            <p className='body number'>{quantity}</p>
                            <p className='body symbols' onClick={() => handleQuantity('+')}>+</p>
                        </div>
                        <button onClick={() => handleCart({ name: 'XX99 MARK I', price: 1750, quantity: quantity })} className='btn-1'>add to cart</button>
                    </div>
                </div>
            </section>
            <section className='features'>
                <div className='features-text'>
                    <h3>features</h3>
                    <p className='body'>
                        As the headphones all others are measured against, the XX99 Mark I demonstrates
                        over five decades of audio expertise, redefining the critical listening experience.
                        This pair of closed-back headphones are made of industrial, aerospace-grade materials
                        to emphasize durability at a relatively light weight of 11 oz.
                    </p>
                    <p className='body'>
                        From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element,
                        the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers
                        up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber.
                        For connectivity, a specially tuned cable is included with a balanced gold connector.
                    </p>
                </div>
                <div className='features-box'>
                    <h3>in the box</h3>
                    <p className='body'>
                        <span>1x</span>
                        Headphone Unit
                    </p>

                    <p className='body'>
                        <span>2x</span>
                        Replacement Earcups
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        User Manual
                    </p>

                    <p className='body'>
                        <span>1x</span>
                        3.5mm 5m Audio Cable
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
                        <div className="mark2-img"></div>
                        <h4>XX99 MARK II</h4>
                        <button onClick={() => handleClick('/headphones/id:jbgy342ewgh2')} className='btn-1'>see product</button>
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

export default XX99mark1