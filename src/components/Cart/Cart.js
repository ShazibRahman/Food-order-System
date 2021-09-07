import Modal from '../UI/Modal'
import classes from './Cart.module.css'


const Cart = props => {
    const CartItems = <ul className={classes['cart-items']}>{[
        { id: 'c1', name: 'Chicken Biryani', amount: 2, price: 200 }
    ].map(item => <li>{item.name}</li>)}</ul>

    return <Modal>
        {CartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>400</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>
                Close
            </button>
            <button className={classes.button}>Order</button>

        </div>
    </Modal>

}



export default Cart