import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   container: {
      width: "100%",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10
   },
   header: {
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      paddingVertical: 10
   },
   title: {
      color: "#fff",
      fontWeight: "bold"
   }
})
