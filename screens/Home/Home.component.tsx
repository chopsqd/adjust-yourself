import React from "react"
import { Button, Text, View } from "react-native"
import { INavigationProp } from "../../AppNavigator"

interface IHomeProps {
   navigation: INavigationProp
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
   return (
      <View>
         <Text>Home</Text>
         <Button
            title={"Go to Creators screen"}
            onPress={() =>
               navigation.navigate("Creators")
            }
         />
      </View>
   )
}

export default Home
