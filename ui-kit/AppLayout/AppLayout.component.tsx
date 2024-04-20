import React from "react"
import { View } from "react-native"
import { styles } from "./AppLayout.style"
import { IAppLayoutProps } from "./AppLayout.types"

const AppLayout: React.FC<IAppLayoutProps> = (props) => {
   const { children } = props

   return (
      <View style={styles.app}>
         <View style={styles.container}>
            {children}
         </View>
      </View>
   )
}

export default AppLayout
