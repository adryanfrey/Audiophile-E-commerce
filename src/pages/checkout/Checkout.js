// sass
import './checkout.sass'

// hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// toastify
import { toast } from 'react-toastify'

// assets
import xx99mark2 from '../../assets/Group15.png'
import xx99mark1 from '../../assets/Group3.png'
import zx9 from '../../assets/Group5.png'
import zx7 from '../../assets/Group8.png'
import xx59 from '../../assets/Group2.png'
import yx1 from '../../assets/Group7.png'
import success from '../../assets/success.png'


const Checkout = ({ totalPrice, items, removeAll }) => {
    const vat = Math.round(totalPrice * 0.2)
    const grandTotal = totalPrice + 50

    // states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const [error, setError] = useState(false)
    const [eMoneyInput, seteMoneyInput] = useState(undefined)
    const [cashInput, setCashInput] = useState(undefined)

    const navigate = useNavigate('')

    const [displaySuccess, setDisplaySuccess] = useState(false)


    // render the image conditionaly
    const imgRendering = (src) => {
        switch (src) {
            case 'XX99 MARK II':
                return xx99mark2

            case 'XX99 MARK I':
                return xx99mark1

            case 'ZX9 SPEAKER':
                return zx9

            case 'ZX7 SPEAKER':
                return zx7

            case 'XX59 HEADPHONES':
                return xx59

            case 'YX1 EARPHONES':
                return yx1
        }
    }

    // payment 
    const handlePayment = () => {
        if (name === '' || email === '' || phoneNumber === '' || address === '' || zipcode === '' || zipcode === '' || city === '' || country === '') {
            toast.warn('There are some missing fields')
            setError(true)
            return
        }

        if (eMoneyInput.checked === false && cashInput.checked === false) {
            window.scrollTo(0, 500)
            toast.warn('Select a payment method')
            return
        }
        window.scrollTo(0,0)
        setDisplaySuccess(true)
    }


    // getting the radio inputs reference
    useEffect(() => {
        const input1 = document.querySelector('#e-money')
        const input2 = document.querySelector('#cash')

        seteMoneyInput(input1)
        setCashInput(input2)

    }, [])

    // payment success button 
    const paymentSuccess = () => {
        removeAll()
        setDisplaySuccess(false)
        navigate('/')
        
    }

    // when payment is succesfull
    useEffect(() => {
        const successContainer = document.querySelector('.payment-success')
        const filter = document.querySelector('.filterCheckout')

        if (displaySuccess === true) {
            successContainer.style.display = 'block'
            filter.style.display = 'block'
        } 

    }, [displaySuccess])

    // check if array is empty
    useEffect(() => {
        const checkArray = () => {
            if (items.length === 0) {
                navigate('/')
            }
        }
        checkArray()
    }, [])

    if (items.length === 0) {
        return
    }

    return (
        <div className='checkout'>
            <div className='dark-bg'></div>
            <div className='checkout-container'>
                <div className='container1'>
                    <h4>checkout</h4>
                    <div className='input-container'>
                        <p className='body'>billing details</p>
                        <div>
                            <label>Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" value={name} placeholder='Your name' />
                            {name === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                        <div>
                            <label>Email Adress</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Your Email' />
                            {email === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" placeholder='Your phone' />
                            {phoneNumber === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                    </div>

                    <div className='input-container'>
                        <p className='body'>Shipping Info</p>
                        <div className='input100'>
                            <label>Adress</label>
                            <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder='ex: 1137 William Avenue' />
                            {address === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                        <div>
                            <label>Zip Code</label>
                            <input onChange={(e) => setZipcode(e.target.value)} value={zipcode} type="text" placeholder='Your zip code' />
                            {zipcode === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                        <div>
                            <label>City</label>
                            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder='Your city' />
                            {city === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                        <div>
                            <label>Country</label>
                            <input onChange={(e) => setCountry(e.target.value)} value={country} type="text" placeholder='Your country' />
                            {country === '' && error === true ? (<p className='error'>Missing field</p>) : ('')}
                        </div>
                    </div>

                    <div className='input-container'>
                        <div className='radio'>
                            <p className='body'>Payment details</p>
                            <p className='body p-small'>Payment method</p>

                            <label>
                                <span className='body'>e-Money</span>
                                <input type="radio" id='e-money' value='e-Money' name='moneyType' />
                            </label>

                            <label>
                                <span className='body'>Cash on Delivery</span>
                                <input type="radio" id='cash' placeholder='Cash on Delivery' name='moneyType' />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='container2'>
                    <h6>summary</h6>

                    {items.map((item) => {
                        return (
                            <div className='cart-item-container' key={item.price}>
                                <img src={imgRendering(item.name)} alt="" />
                                <div className='cart-items-price'>
                                    <p className='body name'>{item.name}</p>
                                    <p className='body price'>$ {item.price}</p>
                                </div>
                                <div className='cart-items-quantity'>
                                    <p className='body'>{item.quantity}x</p>
                                </div>
                            </div>
                        )
                    })
                    }

                    <div className='price'>
                        <p>total</p>
                        <span>$ {totalPrice}</span>
                    </div>

                    <div className='price'>
                        <p>shippign</p>
                        <span>$ 50</span>
                    </div>

                    <div className='price'>
                        <p>vat (included)</p>
                        <span>$ {vat}</span>
                    </div>

                    <div className='price grand-total'>
                        <p>grand total</p>
                        <span>$ {grandTotal}</span>
                    </div>

                    <button onClick={handlePayment} className='btn-1'>continue & pay</button>
                </div>
            </div>
            <div className='payment-success'>
                <img src={success} alt="" />
                <h4>thank you for your order</h4>
                <p className='body margin'>You will receive an email confirmation shortly</p>
                <div className='items-container'>
                    <div className='items'>
                        <div className='items-info' key={items[0].price}>
                            <img src={imgRendering(items[0].name)} alt="" />
                            <div className='cart-items-price'>
                                <p className='body name'>{items[0].name}</p>
                                <p className='body price'>$ {items[0].price}</p>
                            </div>
                            <div className='cart-items-quantity'>
                                <p className='body'>{items[0].quantity}x</p>
                            </div>
                        </div>
                        {items.length > 1 &&
                            <div className='other-items'>
                                <p className='body'>and {items.length - 1} other item(s)</p>
                            </div>
                        }
                    </div>
                    <div className='grand-total'>
                        <p className='body'>Grand total</p>
                        <span className='body'>$ {grandTotal}</span>
                    </div>
                </div>
                <button onClick={() => paymentSuccess()} className='btn-1'>Back to home</button>
            </div>
            <div className='filterCheckout'>oi</div>
        </div>
    )
}

export default Checkout