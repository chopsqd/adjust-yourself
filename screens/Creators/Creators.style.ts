import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   container: {
      height: "90%",
      flexDirection: "column",
      justifyContent: "space-around"
   },
   title: {
      textAlign: "center",
      fontWeight: "bold"
   },
   subtitle: {
      textAlign: "center"
   },
   creatorsList: {
      flexDirection: "column",
      justifyContent: "space-around",
      gap: 10
   },
   copyrights: {
      fontStyle: "italic",
      textAlign: "center"
   }
})
