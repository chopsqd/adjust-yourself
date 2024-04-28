import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   bar: {
      borderRadius: 10,
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      padding: 10,
      marginTop: 10,
      height: 45,
      backgroundColor: "#ECECEC"
   },
   progress: {
      backgroundColor: "#84FF98",
      borderRadius: 10,
      height: 45,
      position: "absolute",
      top: 0,
      left: 0
   },
   title: {
      textAlign: "center"
   }
})
