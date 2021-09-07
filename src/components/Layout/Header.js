
import { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>TastyMeals</h1>
            <HeaderCartButton>Your Cart</HeaderCartButton>

        </header>
        <div>
            <img className={classes['main-image']} src={mealsImage} alt='A lot of delicious food to order from !' />
        </div>
    </Fragment>

}


export default Header

