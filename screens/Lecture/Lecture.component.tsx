import React, { useEffect, useRef, useState } from "react"
import { INavigationProp } from "../../AppNavigator"
import { Alert, SafeAreaView, ScrollView, View } from "react-native"
import Markdown from "react-native-markdown-display"
import { AppButton, AppHeader, AppLayout } from "../../ui-kit"
import { useAppSelector } from "../../store/hooks"
import { selectSettings } from "../../store/slices/main"
import { getLecture } from "./Lecture.utils"
import { ILecture } from "../../content"
import { styles } from "./Lecture.style"
import { ThemeEnum } from "../../services/StorageService/Storage.types"

interface ILectureProps {
   navigation: INavigationProp
   route: {
      params: {
         lecture: number
      }
   }
}

const Lecture: React.FC<ILectureProps> = ({ navigation, route }) => {
   const [ lecture, setLecture ] = useState<ILecture | null>(null)
   const { fontSize, accent, theme } = useAppSelector(selectSettings)
   const scrollViewRef = useRef<ScrollView>(null)

   const onInfoPress = () => {
      Alert.alert(
         "Раздел с темой",
         "В этом разделе расположена лекция для выбранной темы"
      )
   }

   useEffect(() => {
      const lectureFromParams = getLecture(route.params.lecture)
      setLecture(lectureFromParams)
   }, [])

   if (!lecture) {
      return null
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
            title={lecture.title}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout theme={theme}>
            <SafeAreaView>
               <ScrollView
                  contentInsetAdjustmentBehavior={"automatic"}
                  style={{ height: "90%" }}
                  ref={scrollViewRef}
               >
                  <Markdown
                     style={{
                        body: {
                           fontSize,
                           color: theme === ThemeEnum.dark ? "#FFF" : "#000"
                        },
                        heading3: {
                           fontSize: fontSize * 1.2,
                           color: theme === ThemeEnum.dark ? "#FFF" : "#000"
                        },
                        code_block: {
                           fontSize,
                           color: theme === ThemeEnum.dark ? "#FFF" : "#000"
                        }
                     }}
                  >
                     {lecture.text}
                  </Markdown>

                  <AppButton
                     style={styles.testBtn}
                     onPress={() => {
                        navigation.navigate("Test", { lecture: route.params.lecture })
                        scrollViewRef.current!.scrollTo({ y: 0, animated: false })
                     }}
                     title={"Перейти к тесту"}
                     bgColor={accent}
                     fontSize={fontSize}
                  />
               </ScrollView>
            </SafeAreaView>
         </AppLayout>
      </View>
   )
}

export default Lecture
