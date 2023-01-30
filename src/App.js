// hooks
import { HashRouter , Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//sass
import './sassStyles/global.sass'
import './sassStyles/typography.sass'

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pages
import Home from './pages/Home/Home'
import Headphones from './pages/Headphones/Headphones';
import Speakers from './pages/Speakers/Speakers';
import Earphones from './pages/Earphones.sass/Earphones';
import Xx99mark2 from './pages/xx99mark2/Xx99mark2';
import Xx99mark1 from './pages/xx99mark1/Xx99mark1';
import Xx59 from './pages/xx59/Xx59';
import Zx9 from './pages/zx9/Zx9';
import Zx7 from './pages/zx7/Zx7';
import Yx1 from './pages/yx1/Yx1';
import Checkout from './pages/checkout/Checkout';

// assets
import xx99mark2 from './assets/Group15.png'
import xx99mark1 from './assets/Group3.png'
import zx9 from './assets/Group5.png'
import zx7 from './assets/Group8.png'
import xx59 from './assets/Group2.png'
import yx1 from './assets/Group7.png'


function App() {
  // states
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(null)
  const [cartDisplay, setCartDisplay] = useState(false)

  // calc the total price of the cart
  useEffect(() => {
    setTotalPrice(null)

    items.map((item) => {
      let price = item.price
      let quantity = item.quantity
      let total = price * quantity

      setTotalPrice(prevState => prevState + total)

      // remove item when quantity = 0
      if (item.quantity === 0) {
        setItems(items.filter(i => i.name !== item.name))
      }
    })

    if (items.length > 0) {
      const cartButton = document.querySelector('.cart-button')
      cartButton.style.display = 'flex'
    } else {
      const cartButton = document.querySelector('.cart-button')
      cartButton.style.display = 'none'
    }
  }, [items])


  // change the quantity of the items in the cart
  const handleItemQuantity = (p) => {
    if (p.type === '-') {
      setItems(items.map(item => {
        if (item.name === p.name) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      }))
      console.log(items)
    } else {
      setItems(items.map(item => {
        if (item.name === p.name) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      }))
    }
  }

  // add items to the cart
  const addItem = (product) => {
    if (product.quantity === 0) {
      toast.warn('Select the quantity you want')
      return
    }
    setItems([...items, product])
    toast.success('Item added to the cart')
  }


  // remove all items from the cart
  const removeAll = () => {
    setItems([])
  }

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

      case 'YX1':
        return yx1
    }
  }

  // display the cart
  useEffect(() => {
    const cart = document.querySelector('.cart-container')
    const filter = document.querySelector('.filter')
    const navbar = document.querySelector('.navbar-tablet')
    const filterNavbar = document.querySelector('.filter-navbar')

    if (cartDisplay === true) {
      cart.style.display = 'block'
      filter.style.display = 'block'
      navbar.style.display = 'none'
      filterNavbar.style.display = 'none'

    } else {
      cart.style.display = 'none'
      filter.style.display = 'none'
    }
  }, [cartDisplay])

  const displayCart = () => {
    if (cartDisplay === false) {
      setCartDisplay(true)
    } else {
      setCartDisplay(false)
    }
  }

  const handleCartClick = () => {
    window.scrollTo(0,0)

    if (window.pageYOffset < 400) {
      displayCart()
    } else {
      setTimeout(displayCart, 700)
    }

  }

  return (
    <div className="App">
      <HashRouter>
        <div className='cart-button' onClick={() => handleCartClick()}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className='cart-container'>
          <div className="title">
            <p>Cart ({items.length})</p>
            <p className='gray-text' onClick={() => removeAll()}>Remove all</p>
          </div>
          {items.map((item) => {
            return (
              <div className='cart-item-container' key={item.price}>
                <img src={imgRendering(item.name)} alt="" />
                <div className='cart-items-price'>
                  <p className='name'>{item.name}</p>
                  <p className='price'>$ {item.price}</p>
                </div>
                <div className='cart-items-quantity'>
                  <p onClick={() => handleItemQuantity({ name: item.name, type: '-' })} className='quantityManagement'>-</p>
                  <p>{item.quantity}</p>
                  <p onClick={() => handleItemQuantity({ name: item.name, type: '+' })} className='quantityManagement'>+</p>
                </div>
              </div>
            )
          })
          }
          {items.length === 0 ? (
            <div>
              <p>Looks like you havent add any item to the cart yet :( </p>
              <p onClick={displayCart} className='back'>Back</p>
            </div>
          ) : (
            <div>
              <div className='cart-total'>
                <p className='text'>total</p>
                <p className='total-price'>$ {totalPrice}</p>
              </div>
              <button onClick={displayCart} className='btn-1'><Link to='/checkout'>Checkout</Link></button>
              <p onClick={displayCart} className='back'>Back</p>
            </div>
          )}
        </div>
        <Navbar displayCart={displayCart} />
        <div className='filter'></div>
        <ToastContainer autoClose={2000} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='speakers' element={<Speakers />} />
          <Route path='earphones' element={<Earphones />} />
          <Route path='/headphones/id:jbgy342ewgh2' element={<Xx99mark2 addItem={addItem} />} />
          <Route path='/headphones/id:lkjnuwedsas1' element={<Xx99mark1 addItem={addItem} />} />
          <Route path='/headphones/id:oiwedhsnas34' element={<Xx59 addItem={addItem} />} />
          <Route path='/speakers/id:yubdwudasas3' element={<Zx9 addItem={addItem} />} />
          <Route path='/speakers/id:gusajhdascsa56' element={<Zx7 addItem={addItem} />} />
          <Route path='/earphones/id:alskdnase324a' element={<Yx1 addItem={addItem} />} />
          <Route path='/checkout' element={<Checkout totalPrice={totalPrice} items={items} removeAll={removeAll} />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
