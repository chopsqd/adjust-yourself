import React from "react"
import { IAppHeaderProps } from "./AppHeader.types"
import { View, Text } from "react-native"
import AppButton from "../AppButton/AppButton.component"
import { styles } from "./AppHeader.style"

const AppHeader: React.FC<IAppHeaderProps> = (props) => {
   const { title, bgColor, fontSize, onInfoPress, navigation } = props

   const onHomePress = () => {
      navigation.navigate("Home")
   }

   return (
      <View
         style={[
            {
               backgroundColor: bgColor
            },
            styles.container
         ]}
      >
         <View style={styles.header}>
            <AppButton
               fontSize={fontSize}
               onPress={onInfoPress}
               title={"info"}
               bgColor={bgColor}
            />
            <Text
               style={[
                  { fontSize },
                  styles.title
               ]}
            >
               {title}
            </Text>
            <AppButton
               fontSize={fontSize}
               onPress={onHomePress}
               title={"home"}
               bgColor={bgColor}
            />
         </View>
      </View>
   )
}

export default AppHeader
