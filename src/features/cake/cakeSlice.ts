import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as icecreamOrdered } from "../icecream/icecreamSlice";
/////////////////////////////////////////////////////
type InitialState = {
    numOfCakes: number;
    numArr: number[];
    wordArr: string[];
    obj: {
      objNumCakes: number;
      objNumArr: number[];
      objWordArr: string[];
    };
  };
  const initialState: InitialState = {
    numOfCakes: 0,
    numArr: [1, 2],
    wordArr: ["One", "Two"],
    obj: {
      objNumCakes: 0,
      objNumArr: [11, 22],
      objWordArr: ["Five", "Six"]
    }
  };
  const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
      ordered: (state) => {
        state.numOfCakes--;
        state.obj.objNumCakes--;
      },
      restocked: (state, action: PayloadAction<number>) => {
        state.numOfCakes += action.payload;
        state.obj.objNumCakes += action.payload;
      },
      addStrArr: (state, action: PayloadAction<string>) => {
        state.wordArr = [...state.wordArr, action.payload];
        state.obj.objWordArr = [...state.obj.objWordArr, action.payload];
      },
      multArr: (state, action: PayloadAction<number>) => {
        let numArrTemp = [...state.numArr];
        numArrTemp.forEach((item, index, arr) => {
          arr[index] = item * action.payload;
        });
        state.numArr = numArrTemp;
  
        numArrTemp = [...state.obj.objNumArr];
        numArrTemp.forEach((item, index, arr) => {
          arr[index] = item * action.payload;
        });
        state.obj.objNumArr = numArrTemp;
      },
      addArr: (state) => {
        state.numArr = [...state.numArr, state.numArr.length + 1];
        state.obj.objNumArr = [
          ...state.obj.objNumArr,
          state.obj.objNumArr.length + 1
        ];
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