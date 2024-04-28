import React from "react"
import { Text, View } from "react-native"
import { styles } from "./AppProgressBar.style"
import { IAppProgressBarProps } from "./AppProgressBar.types"

const AppProgressBar: React.FC<IAppProgressBarProps> = (props) => {
   const { title, complete, fontSize, total } = props

   return (
      <View
         style={styles.bar}
      >
         <View
            style={[
               styles.progress,
               {
                  width: `${complete * (107 / total)}%`
               }
            ]}
         />
         <Text
            style={[
               { fontSize },
               styles.title
            ]}
         >
            {title} {complete}/{total}
         </Text>
      </View>
   )
}

export default AppProgressBar
