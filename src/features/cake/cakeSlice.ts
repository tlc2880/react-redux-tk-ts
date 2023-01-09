import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as icecreamOrdered } from "../icecream/icecreamSlice";
/////////////////////////////////////////////////////
type InitialState = {
  numOfCakes: number;
};
const initialState: InitialState = {
  numOfCakes: 20
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
    multValue: (state, action: PayloadAction<number>) => {
      state.numOfCakes *= action.payload;
    },
    multConst: (state, action: PayloadAction<number>) => {
      state.numOfCakes *= action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(icecreamOrdered, (state) => {
      state.numOfCakes--;
    });
  }
});

export default cakeSlice.reducer;
export const { ordered, restocked, multValue, multConst } = cakeSlice.actions;
