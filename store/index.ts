import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "./slices/main"

export const store = configureStore({
   reducer: {
      main: mainReducer
   }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
