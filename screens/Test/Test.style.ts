import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   container: {
      position: "relative",
      height: "89.5%"
   },
   bar: {
      flexDirection: "row",
      justifyContent: "space-between"
   },
   barItem: {
      width: 50,
      height: 7,
      borderRadius: 10,
      marginTop: 15,
      marginBottom: 15
   },
   questionBox: {
      width: "100%",
      maxHeight: 125,
      marginBottom: 15,
      borderStyle: "solid",
      borderRadius: 10,
      borderColor: "#DDDDDD",
      borderWidth: 4
   },
   questionText: {
      padding: 25,
      textAlign: "center",
      fontWeight: "bold"
   },
   options: {
      height: "50%",
      marginBottom: 70,
      borderRadius: 10
   },
   buttons: {
      position: "absolute",
      backgroundColor: "#fff",
      width: "100%",
      bottom: 0,
      paddingTop: 4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",

      borderTopWidth: 3,
      borderTopColor: "#EEE"
   }
})
