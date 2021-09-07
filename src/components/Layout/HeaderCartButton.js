import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../Store/cart-context'
import { useContext, useEffect, useState } from 'react'




const HeaderCartButton = props => {
    const [bth, setBth] = useState(false)

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    useEffect(() => {
        if (cartCtx.length === 0) {
            return 0;
        }


        setBth(true)
        const timer = setTimeout(() => {

            setBth(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    const btnclasses = `${classes.button} ${bth ? classes.bump : ''}`


    return <button className={btnclasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
}



export default HeaderCartButton