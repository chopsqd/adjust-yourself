import React from "react"
import { Image, View } from "react-native"
import { INavigationProp } from "../../AppNavigator"
import AppLayout from "../../ui-kit/AppLayout/AppLayout.component"
import { AppButton } from "../../ui-kit"
import { useAppSelector } from "../../store/hooks"
import { selectCurrentLevel, selectSettings } from "../../store/slices/mainSlice"
import { styles } from "./Home.style"

interface IHomeProps {
   navigation: INavigationProp
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
   const currentLevel = useAppSelector(selectCurrentLevel)
   const { fontSize, accent, theme } = useAppSelector(selectSettings)

   return (
      <View>
         <AppLayout theme={theme}>
            <Image
               source={require("../../assets/Logo.png")}
               style={styles.image}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("Lecture", { lecture: currentLevel })
               }}
               title={currentLevel === 0 ? "НАЧАТЬ" : "ПРОДОЛЖИТЬ"}
               bgColor={accent}
               fontSize={fontSize}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("Lectures")
               }}
               style={{ marginTop: 10 }}
               title={"ТЕМЫ"}
               bgColor={accent}
               fontSize={fontSize}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("SandBox")
               }}
               style={{ marginTop: 10 }}
               title={"ПЕСОЧНИЦА"}
               bgColor={accent}
               fontSize={fontSize}
            />
         </AppLayout>

         <View style={styles.buttons}>
            <AppButton
               onPress={() => {
                  navigation.navigate("Creators")
               }}
               title={"team"}
               bgColor={accent}
               fontSize={fontSize}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("Settings")
               }}
               title={"gear"}
               bgColor={accent}
               fontSize={fontSize}
            />
         </View>
      </View>
   )
}

export default Home
