import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useState } from "react";
/////////////////////////////////////////////////////
import { ordered, restocked, addStrArr, multArr, addArr } from "./cakeSlice";
export const CakeView = () => {
  const [value, setValue] = useState(1);
  const [inStr, setInStr] = useState("");
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const numArr = useAppSelector((state) => state.cake.numArr);
  const wordArr = useAppSelector((state) => state.cake.wordArr);
  const obj = useAppSelector((state) => state.cake.obj);
  // const numOfIcecreams = useAppSelector(
  //   (state) => state.icecream.numOfIcecreams
  // );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h4>Number of cakes: {numOfCakes}</h4>
      <h4>Number array: {JSON.stringify(numArr)}</h4>
      <h4>String array: {JSON.stringify(wordArr)}</h4>
      <h4>Object: {JSON.stringify(obj)}</h4>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
      <input
        type="string"
        value={inStr}
        onChange={(e) => setInStr(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addStrArr(inStr));
          setInStr("");
        }}
      >
        Add Str array
      </button>
      <button onClick={() => dispatch(multArr(2))}>Multiply array</button>
      <button onClick={() => dispatch(addArr())}>Add to array</button>
    </div>
  );
};