import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const [checkoutNotice, setCheckoutNotice] = useState('')

  const handleCheckout = () => {
    setCheckoutNotice('Coming Soon')
  }

  return (
    <main className="page-shell cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <Link to="/plants" className="secondary-button">
          Continue Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Pick a few plant favorites and come back anytime.</p>
          <Link to="/plants" className="primary-button">
            Browse Plants
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <span>Total:</span>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>

          <div className="cart-list">
            {cartItems.map((item) => {
              const itemTotal = item.price * item.quantity

              return (
                <article key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${itemTotal.toFixed(2)}</p>
                  </div>

                  <div className="cart-controls">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="checkout-row">
            <button type="button" className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
            {checkoutNotice && <p className="checkout-message">{checkoutNotice}</p>}
          </div>
        </>
      )}
    </main>
  )
}

export default CartItem
