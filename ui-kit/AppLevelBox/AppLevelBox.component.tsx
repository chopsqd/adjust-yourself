import React from "react"
import { Pressable, Text, View } from "react-native"
import { IAppLevelBoxProps } from "./AppLevelBox.types"
import { styles } from "./AppLevelBox.style"
import { lock } from "./AppLevelBox.utils"
import { ThemeEnum } from "../../services/StorageService/Storage.types"

const AppLevelBox: React.FC<IAppLevelBoxProps> = (props) => {
   const { title, disabled, fontSize, onPress, theme } = props

   return (
      <Pressable
         onPress={onPress}
      >
         <View
            style={[
               {
                  backgroundColor: disabled
                     ? "rgba(183, 183, 183,.5)"
                     : "transparent"
               },
               styles.bar
            ]}
         >
            <Text
               style={[
                  {
                     fontSize,
                     color: theme === ThemeEnum.dark
                        ? "#FFF"
                        : disabled
                           ? "#bababa"
                           : "#000"
                  },
                  styles.title
               ]}
            >
               {title}
            </Text>
            {disabled && (
               <View
                  style={[
                     {
                        height: fontSize * 2.8
                     },
                     styles.lock
                  ]}
               >
                  {lock}
               </View>
            )}
         </View>
      </Pressable>
   )
}

export default AppLevelBox
