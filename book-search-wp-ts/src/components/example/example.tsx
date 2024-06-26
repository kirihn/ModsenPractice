import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { increment, decrement, incrementByAmount } from '../../store/exampleSlice';
//import { SetCategories } from '../../store/foundSlice';

const Counter: React.FC = () => {
  const categories = useSelector((state: RootState) => state.found.Categories)
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>{categories}</h1>
        {/* <button onClick={() => dispatch(SetCategories("NewCategory"))}>change Category</button> */}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
