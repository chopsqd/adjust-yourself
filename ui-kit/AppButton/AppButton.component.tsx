import React from "react"
import { Pressable } from "react-native"
import { styles } from "./AppButton.style"
import { IAppButtonProps } from "./AppButton.types"
import { getContent } from "./AppButton.utils"

const AppButton: React.FC<IAppButtonProps> = (props) => {
   const { title, onPress, bgColor, fontSize, disabled } = props

   return (
      <Pressable
         disabled={disabled}
         style={({ pressed }) => [
            styles.button,
            {
               backgroundColor: disabled
                  ? "#939393"
                  : pressed
                     ? `${bgColor}99`
                     : bgColor
            }
         ]}
         onPress={onPress}
      >
         {getContent(title, fontSize)}
      </Pressable>
   )
}

export default AppButton
