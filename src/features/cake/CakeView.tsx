import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useState } from "react";
/////////////////////////////////////////////////////
import {
    ordered,
    restocked,
    multValue,
    multConst,
//    addArr
} from "./cakeSlice";
export const CakeView = () => {
  const [value, setValue] = useState(1);
  const [multVal, setMultVal] = useState(1);
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  // const numOfIcecreams = useAppSelector(
  //   (state) => state.icecream.numOfIcecreams
  // );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h4>Number of cakes: {numOfCakes}</h4>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
      <input
        type="number"
        value={multVal}
        onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
      />
      <button onClick={() => dispatch(multValue(multVal))}>
        Multiply Cakes
      </button>
      <button onClick={() => dispatch(multConst(2))}>Multiply by 2</button>
    </div>
  );
};