import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "./slices/mainSlice"
import testReducer from "./slices/testSlice"

export const store = configureStore({
   reducer: {
      main: mainReducer,
      test: testReducer
   }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
