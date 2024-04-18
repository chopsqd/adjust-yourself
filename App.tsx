import React from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import AppNavigator from "./AppNavigator"

export default function App () {
   return (
      <Provider store={store}>
         <AppNavigator />
      </Provider>
   )
}
