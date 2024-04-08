import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { decrement, increment, incrementByAmount } from "../counter/CounterSlice";

const Counter = () => {

    const count = useSelector ( ( state: RootState ) => state.counter.value )
    const dispatch = useDispatch();

    return (
        <>
            <h2>{ count }</h2>
            <div>
                <button onClick = { () => dispatch( increment() ) }>+</button>
                <button onClick = { () => dispatch( decrement() ) }>-</button>
                <button onClick = { () => dispatch( incrementByAmount(10) ) }>By 10</button>
            </div>
        </>
    )
}

export default Counter;