import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slicer/CountSlicer";
/*
const countVal = (state, action) => {
  if(action == 'inc'){
    return state+1;
  }else if(action == 'dec'){
    return state-1;
  }else{
    return 0
  }
}
*/

export default function Counter(){
    const counterVal = useSelector((state) => state.counter)
    const dispatch = useDispatch();
 const handleInc = () => {
    dispatch(increment())
  }

  const handleDec = () => {
    dispatch(decrement())
  }

  const handleRest = () => {
    dispatch(reset())
  }
    /*
    // method 2
  const [count, dispatch] = useReducer(countVal, 0);

  const handleInc = () => {
    dispatch('inc')
  }

  const handleDec = () => {
    dispatch('dec')
  }

  const handleRest = () => {
    dispatch('rest')
  }
*/
   /*
  // method 1
  const [count,setCount] = useState(0);

  const handleInc = () => {
    setCount(prev => prev+1);
  }

  const handleDec = () => {
    setCount(prev => prev-1);
  }

  const handleRest = () => {
    setCount(0);
  }
    */

    return(
        <>
            <h2>Count -- {counterVal}</h2>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleRest}>Reset</button>
        </>
    )
}