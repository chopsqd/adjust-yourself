import React from "react"
import { Text, View } from "react-native"
import { styles } from "./AppProgressBar.style"
import { IAppProgressBarProps } from "./AppProgressBar.types"

const AppProgressBar: React.FC<IAppProgressBarProps> = (props) => {
   const { title, complete, fontSize } = props

   return (
      <View
         style={styles.bar}
      >
         <View
            style={[
               styles.progress,
               {
                  width: `${complete * 10.7}%`
               }
            ]}
         />
         <Text
            style={[
               { fontSize },
               styles.title
            ]}
         >
            {title} {complete}/10
         </Text>
      </View>
   )
}

export default AppProgressBar
