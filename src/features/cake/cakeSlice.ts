import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as icecreamOrdered } from "../icecream/icecreamSlice";
/////////////////////////////////////////////////////
type InitialState = {
  numOfCakes: number;
  numArr: number[];
  wordArr: string[];
};
const initialState: InitialState = {
  numOfCakes: 20,
  numArr: [1, 2],
  wordArr: ["One", "Two"]
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
    addStrArr: (state, action: PayloadAction<string>) => {
      state.wordArr = [...state.wordArr, action.payload];
    },
    multArr: (state, action: PayloadAction<number>) => {
      let numArrTemp = [...state.numArr];
      numArrTemp.forEach((item, index, arr) => {
        arr[index] = item * action.payload;
      });
      state.numArr = numArrTemp;
    },
    addArr: (state) => {
      state.numArr = [...state.numArr, state.numArr.length + 1];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(icecreamOrdered, (state) => {
      state.numOfCakes--;
    });
  }
});

export default cakeSlice.reducer;
export const {
  ordered,
  restocked,
  addStrArr,
  multArr,
  addArr
} = cakeSlice.actions;