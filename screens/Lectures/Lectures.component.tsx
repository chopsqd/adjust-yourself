import React from "react"
import { useAppSelector } from "../../store/hooks"
import { selectCurrentLevel, selectSettings } from "../../store/slices/mainSlice"
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
   const { fontSize, accent, theme } = useAppSelector(selectSettings)

   const onInfoPress = () => {
      Alert.alert(
         "Раздел тем",
         "В этом разделе можно выбрать тему для изучения"
      )
   }

   return (
      <View
         style={{
            backgroundColor: theme
         }}
      >
         <AppHeader
            onInfoPress={onInfoPress}
            navigation={navigation}
            title={"ТЕМЫ"}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout theme={theme}>
            <AppProgressBar
               fontSize={fontSize}
               title={"Пройдено тем"}
               complete={currentLevel}
               total={THEMES.length}
            />
            <ScrollView
               style={{ height: THEMES.length * 49 }}
            >
               {THEMES.map((lectureTheme: string, index: number) => (
                  <AppLevelBox
                     key={lectureTheme}
                     theme={theme}
                     title={lectureTheme}
                     onPress={() => {
                        if (currentLevel >= index) {
                           navigation.navigate("Lecture", { lecture: index })
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
