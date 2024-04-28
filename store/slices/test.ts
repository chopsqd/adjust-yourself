import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootStateType } from "../index"
import { ILecture, IOption } from "../../content"

interface ITestState {
   test: ILecture["test"] | null
   allAnswers: IOption[]
   currentQuestion: number
}

const initialState: ITestState = {
   test: null,
   allAnswers: [],
   currentQuestion: 0
}

const testSlice = createSlice({
   name: "test",
   initialState,
   reducers: {
      setTest (state: ITestState, action: PayloadAction<ILecture["test"] | null>) {
         state.test = action.payload
      },
      prevCurrentQuestion (state: ITestState) {
         state.currentQuestion--
      },
      nextCurrentQuestion (state: ITestState) {
         state.currentQuestion++
      },
      addAnswer (state: ITestState, action: PayloadAction<IOption>) {
         state.allAnswers[state.currentQuestion] = action.payload
      },

      clearTestData: () => initialState
   }
})

export const {
   setTest,
   prevCurrentQuestion,
   nextCurrentQuestion,
   addAnswer
} = testSlice.actions

export const selectTestData = (state: RootStateType) => state.test

export default testSlice.reducer
