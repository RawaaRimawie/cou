import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'; // Corrected here
import { increment, decrement } from './redux/counterSlice';

function App() {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch(); // Fixed the variable name

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment +</button>
            <h1>Count: {counter}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement -</button>
        </div>
    );
}

export default App;
