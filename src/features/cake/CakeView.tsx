import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useState } from "react";
/////////////////////////////////////////////////////
import {
    ordered,
    restocked,
    addStrArr,
    multArr,
    addArr,
    cntWord
    //  objWordCount
  } from "./cakeSlice";
  export const CakeView = () => {
    const [value, setValue] = useState(1);
    const [inStr, setInStr] = useState("");
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const numArr = useAppSelector((state) => state.cake.numArr);
    const wordArr = useAppSelector((state) => state.cake.wordArr);
    const obj = useAppSelector((state) => state.cake.obj);
    const count = useAppSelector((state) => state.cake.count);
    // const numOfIcecreams = useAppSelector(
    //   (state) => state.icecream.numOfIcecreams
    // );
    const dispatch = useAppDispatch();
    return (
      <div>
        <h4>Number of cakes: {numOfCakes}</h4>
        <h4>Number array: {JSON.stringify(numArr)}</h4>
        <h4>Word array: {JSON.stringify(wordArr)}</h4>
        <h4>Object: {JSON.stringify(obj)}</h4>
        <h4>Word count: {JSON.stringify(count.wordCount)}</h4>
        <h4>Obj word count: {JSON.stringify(count.objWordCount)}</h4>
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
        <button onClick={() => dispatch(cntWord())}>Word count</button>
      </div>
    );
  };