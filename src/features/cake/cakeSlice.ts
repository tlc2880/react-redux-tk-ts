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
    count: {
      wordCount: {};
      objWordCount: {};
    };
  };
  const initialState: InitialState = {
    numOfCakes: 0,
    numArr: [1, 2],
    wordArr: ["java", "world", "java", "code", "World", "Java"],
    obj: {
      objNumCakes: 0,
      objNumArr: [11, 22],
      objWordArr: ["One", "Two", "one", "two", "three", "onE"]
    },
    count: {
      wordCount: {},
      objWordCount: {}
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
      },
      cntWord: (state) => {
        const wordCount1: any = {};
        for (const element of state.wordArr) {
          let element1 = element.toLowerCase();
          if (wordCount1[element1]) {
            wordCount1[element1] += 1;
          } else {
            wordCount1[element1] = 1;
          }
        }
        state.count.wordCount = wordCount1;
  
        const objWordCount1: any = {};
        for (const element of state.obj.objWordArr) {
          let element1 = element.toLowerCase();
          if (objWordCount1[element1]) {
            objWordCount1[element1] += 1;
          } else {
            objWordCount1[element1] = 1;
          }
        }
        state.count.objWordCount = objWordCount1;
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
    addArr,
    cntWord
  } = cakeSlice.actions;
  