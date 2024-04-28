import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   container: {
      backgroundColor: "#fff"
   },
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: "5%",
      paddingRight: "5%",
      paddingVertical: 10,
      borderTopColor: "#f1f1f1",
      borderTopWidth: 1,
      borderBottomColor: "#dedede",
      borderBottomWidth: 5
   },
   headerTextBox: {
      flexDirection: "column",
      justifyContent: "center"
   },
   headerText: {
      fontWeight: "bold"
   },
   buttons: {
      flexDirection: "row",
      gap: 10
   },
   codeBox: {
      width: "100%",
      padding: 5
   },
   result: {
      height: "100%",
      padding: 5
   }
})
