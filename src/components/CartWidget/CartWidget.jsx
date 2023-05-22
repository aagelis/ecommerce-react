import cart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div>
            <img className='carrito' src= {cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget