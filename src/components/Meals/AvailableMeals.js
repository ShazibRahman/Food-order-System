import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Biryani',
        description: 'Finest Chicken Biryani',
        price: 200,
    },
    {
        id: 'm2',
        name: 'Pulao',
        description: 'An Iranian specialty!',
        price: 100,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 75,
    },
    {
        id: 'm4',
        name: 'Rice Bowl',
        description: 'Healthy...and Tasty...',
        price: 50,
    },
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} meal={meal} />)
    return <section classNam={classes.meals}>
        <Card>

            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>


}


export default AvailableMeals