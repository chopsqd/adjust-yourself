import React from "react"
import { Image, View, Alert } from "react-native"
import { INavigationProp } from "../../AppNavigator"
import AppLayout from "../../ui-kit/AppLayout/AppLayout.component"
import { AppButton } from "../../ui-kit"
import { useAppSelector } from "../../store/hooks"
import { selectCurrentLevel, selectSettings } from "../../store/slices/main"
import { styles } from "./Home.style"

interface IHomeProps {
   navigation: INavigationProp
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
   const currentLevel = useAppSelector(selectCurrentLevel)
   const { fontSize, accent } = useAppSelector(selectSettings)

   return (
      <View>
         <AppLayout>
            <Image
               source={require("../../assets/Logo.png")}
               style={styles.image}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("Lecture", { lecture: currentLevel })
               }}
               title={"Продолжить"}
               bgColor={accent}
               fontSize={fontSize}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("Lectures")
               }}
               style={{ marginTop: 10 }}
               title={"Темы"}
               bgColor={accent}
               fontSize={fontSize}
            />
            <AppButton
               onPress={() => {
                  navigation.navigate("SandBox")
               }}
               style={{ marginTop: 10 }}
               title={"Песочница"}
               bgColor={accent}
               fontSize={fontSize}
            />
         </AppLayout>

         <View style={styles.buttons}>
            <AppButton
               onPress={() => {
                  Alert.alert(
                     "Adjust Yourself",
                     "Добро пожаловать!\nВ этом приложении ты можешь изучить основы языка JavaScript"
                  )
               }}
               title={"info"}
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
