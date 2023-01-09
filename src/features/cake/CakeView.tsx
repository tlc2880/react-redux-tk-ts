import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useState } from "react";
/////////////////////////////////////////////////////
// Part-A
import { ordered, restocked } from "./cakeSlice";
export const CakeView = () => {
  const numOfCakes = useAppSelector((state: any) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h4>Number of cakes: {numOfCakes}</h4>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};