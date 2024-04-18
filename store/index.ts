import { configureStore } from "@reduxjs/toolkit"
import main from "./slices/main"

export const store = configureStore({
   reducer: {
      main
   }
})
