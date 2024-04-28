import React, { FunctionComponent, useEffect, useRef } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { StorageService } from "./services/StorageService/Storage.service"
import { selectMainData, setMainData } from "./store/slices/main"
import { AppState } from "react-native"
import {
   Home, Lectures, Lecture, Creators,
   Test, TestResult, Settings, SandBox
} from "./screens"

const Stack = createNativeStackNavigator()

export interface INavigationProp {
   navigate: (screen: string, params?: object) => void;
}

const AppNavigator = () => {
   const dispatch = useAppDispatch()
   const reduxData = useAppSelector(selectMainData)
   const reduxDataRef = useRef(reduxData)

   const handleAppStateChange = async (nextAppState: string) => {
      if (nextAppState === "background") {
         await StorageService.setData(reduxDataRef.current)
      }
   }

   const setReduxMainData = async () => {
      const data = await StorageService.getData()
      if (data) {
         dispatch(setMainData(data))
      }
   }

   useEffect(() => {
      reduxDataRef.current = reduxData
   }, [ reduxData ])

   useEffect(() => {
      setReduxMainData()

      const subscription = AppState.addEventListener("change", handleAppStateChange)

      return () => {
         subscription.remove()
      }
   }, [])

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName={"Creators"}>
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
            <Stack.Screen
               name={"Lectures"}
               component={Lectures}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
            <Stack.Screen
               name={"Lecture"}
               component={Lecture as FunctionComponent}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
            <Stack.Screen
               name={"Test"}
               component={Test as FunctionComponent}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
            <Stack.Screen
               name={"TestResult"}
               component={TestResult as FunctionComponent}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
            <Stack.Screen
               name={"SandBox"}
               component={SandBox}
               options={{ headerShown: false, statusBarStyle: "dark" }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default AppNavigator
