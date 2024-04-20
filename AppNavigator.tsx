import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Creators from "./screens/Creators/Creators.component"
import Home from "./screens/Home/Home.component"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { StorageService } from "./services/StorageService/Storage.service"
import { selectMainData, setMainData } from "./store/slices/main"
import { AppState } from "react-native"
import Settings from "./screens/Settings/Settings.component"

const Stack = createNativeStackNavigator()

export interface INavigationProp {
   navigate: (screen: string, params?: object) => void;
}

const AppNavigator = () => {
   const dispatch = useAppDispatch()
   const reduxData = useAppSelector(selectMainData)

   const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === "background") {
         StorageService.setData(reduxData)
      }
   }

   const setReduxMainData = async () => {
      const data = await StorageService.getData()
      if (data) {
         dispatch(setMainData(data))
      }
   }

   useEffect(() => {
      setReduxMainData()

      const subscription = AppState.addEventListener("change", handleAppStateChange)

      return () => {
         subscription.remove()
      }
   }, [])

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName={"Settings"}>
            <Stack.Screen
               name={"Home"}
               component={Home}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
            <Stack.Screen
               name={"Creators"}
               component={Creators}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
            <Stack.Screen
               name={"Settings"}
               component={Settings}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default AppNavigator
