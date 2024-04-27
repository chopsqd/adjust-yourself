import React from "react"
import { useAppSelector } from "../../store/hooks"
import { selectCurrentLevel, selectSettings } from "../../store/slices/main"
import { INavigationProp } from "../../AppNavigator"
import { Alert, ScrollView, View } from "react-native"
import { AppHeader, AppLayout, AppLevelBox, AppProgressBar } from "../../ui-kit"

const THEMES = [
   "Введение в JavaScript",
   "Переменные и типы данных",
   "Операторы",
   "Условия и циклы",
   "Функции",
   "Область видимости",
   "Массивы и объекты",
   "Асинхронное программирование",
   "DOM",
   "Инструменты разработчика"
]

interface ILecturesProps {
   navigation: INavigationProp
}

const Lectures: React.FC<ILecturesProps> = ({ navigation }) => {
   const currentLevel = useAppSelector(selectCurrentLevel)
   const { fontSize, accent } = useAppSelector(selectSettings)

   const onInfoPress = () => {
      Alert.alert(
         "Раздел тем",
         "В этом разделе можно выбрать тему для изучения"
      )
   }

   return (
      <View>
         <AppHeader
            onInfoPress={onInfoPress}
            navigation={navigation}
            title={"ТЕМЫ"}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout>
            <AppProgressBar
               fontSize={fontSize}
               title={"Пройдено тем"}
               complete={currentLevel}
            />
            <ScrollView
               style={{ height: THEMES.length * 49 }}
            >
               {THEMES.map((theme: string, index: number) => (
                  <AppLevelBox
                     key={theme}
                     title={theme}
                     onPress={() => {
                        if (currentLevel >= index) {
                           navigation.navigate("Lecture", { lecture: currentLevel })
                        }
                     }}
                     disabled={currentLevel < index}
                     fontSize={fontSize}
                  />
               ))}
            </ScrollView>
         </AppLayout>
      </View>
   )
}

export default Lectures
