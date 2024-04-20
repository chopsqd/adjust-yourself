import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   row: {
      padding: 20,
      marginTop: "10%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   text: {
      fontSize: 20,
      fontWeight: "bold"
   },
   switch: {
      transform: [
         { scaleX: 1.5 },
         { scaleY: 1.5 }
      ]
   },
   accents: {
      maxWidth: 107,
      flexDirection: "row",
      flexWrap: "wrap"
   }
})
