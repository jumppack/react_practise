import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
    const {meals} = useMealsListContext();

    return (
        <div>
            <h3>Number of meals today is : {meals.length}</h3>
        </div>
    )
}

export default Counter;