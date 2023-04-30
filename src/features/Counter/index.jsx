import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count);

    const handleIncreaseClick = () => {
        const action = increase();
        console.log(action)
        dispatch(action)
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        console.log(action)
        dispatch(action)
    }

    return (
        <div>
            Counter: {count}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;