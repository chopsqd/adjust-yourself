import React, { useEffect, useState } from "react"
import { INavigationProp } from "../../AppNavigator"
import { AppAnswerBox, AppButton, AppHeader, AppLayout, AppProgressBar } from "../../ui-kit"
import { Alert, ScrollView, View } from "react-native"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectCurrentLevel, selectSettings, setCurrentLevel } from "../../store/slices/main"
import { clearTestState, resetTestState, selectTestData } from "../../store/slices/test"
import { IOption, ITest } from "../../content"
import { styles } from "./TestResult.style"

interface ITestResultProps {
   navigation: INavigationProp
   route: {
      params: {
         lecture: number
      }
   }
}

const TestResult: React.FC<ITestResultProps> = ({ navigation, route }) => {
   const dispatch = useAppDispatch()
   const currentLevel = useAppSelector(selectCurrentLevel)
   const { fontSize, accent } = useAppSelector(selectSettings)
   const { test, allAnswers } = useAppSelector(selectTestData)
   const [ availableCount, setAvailableCount ] = useState<number>(0)

   if (!test) {
      return null
   }

   useEffect(() => {
      const filteredAnswers = allAnswers.filter((item: IOption) => item.isCorrect)
      setAvailableCount(filteredAnswers.length)
   }, [])

   const onInfoPress = () => {
      Alert.alert(
         "Раздел с результатами теста",
         "Этот раздел обеспечивает полный обзор результатов тестирования, а также служит важным инструментом для самооценки и повышения знаний и навыков"
      )
   }

   const onAgainPress = () => {
      navigation.navigate("Test", { lecture: currentLevel })
      dispatch(resetTestState())
   }

   const onContinuePress = () => {
      if (availableCount > 2) {
         dispatch(clearTestState())
         if (route.params.lecture === currentLevel) {
            dispatch(setCurrentLevel(currentLevel + 1))
         }
         navigation.navigate("Lectures")
      }
   }

   return (
      <View>
         <AppHeader
            onInfoPress={onInfoPress}
            navigation={navigation}
            title={"ИТОГИ"}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout>
            <AppProgressBar
               title={"Правильных ответов"}
               total={5}
               complete={availableCount}
               fontSize={fontSize}
            />
            <ScrollView style={styles.answers}>
               {test.map((item: ITest, index: number) => (
                  <AppAnswerBox
                     key={item.question}
                     question={item.question}
                     answer={allAnswers[index]!.answer}
                     isCorrect={allAnswers[index]!.isCorrect}
                     fontSize={fontSize}
                  />
               ))}
            </ScrollView>

            <View style={styles.buttons}>
               <AppButton
                  onPress={onAgainPress}
                  title={"Заново"}
                  bgColor={accent}
                  fontSize={fontSize}
               />
               <AppButton
                  onPress={onContinuePress}
                  disabled={availableCount < 3}
                  title={availableCount < 3 ? `${availableCount} / 5` : "Далее" }
                  bgColor={accent}
                  fontSize={fontSize}
               />
            </View>
         </AppLayout>
      </View>
   )
}

export default TestResult
