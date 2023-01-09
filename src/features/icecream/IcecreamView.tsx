import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked, multValue, divConst } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const [multVal, setMultVal] = useState(1);
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h4>Number of ice creams: {numOfIcecreams}</h4>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>

      <input
        type="number"
        value={multVal}
        onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
      />
      <button onClick={() => dispatch(multValue(multVal))}>
        Multiply Ice creams
      </button>
      <button onClick={() => dispatch(divConst(2))}>Divide by 2</button>
    </div>
  );
};