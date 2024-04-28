import React from "react"
import { View } from "react-native"
import { styles } from "./AppLayout.style"
import { IAppLayoutProps } from "./AppLayout.types"

const AppLayout: React.FC<IAppLayoutProps> = (props) => {
   const { children, theme } = props

   return (
      <View
         style={[
            styles.app,
            {
               backgroundColor: theme
            }
         ]}
      >
         <View style={styles.container}>
            {children}
         </View>
      </View>
   )
}

export default AppLayout
