import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Creators from "./screens/Creators/Creators.component"
import Home from "./screens/Home/Home.component"

const Stack = createNativeStackNavigator()

export interface INavigationProp {
   navigate: (screen: string, params?: object) => void;
}

const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen
               name={"Home"}
               component={Home}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name={"Creators"}
               component={Creators}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default AppNavigator
