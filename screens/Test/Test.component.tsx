import React, { useEffect, useRef } from "react"
import { INavigationProp } from "../../AppNavigator"
import { Alert, ScrollView, Text, View } from "react-native"
import { AppButton, AppHeader, AppLayout } from "../../ui-kit"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectSettings } from "../../store/slices/main"
import { styles } from "./Test.style"
import { getTest } from "./Test.utils"
import { addAnswer, nextCurrentQuestion, prevCurrentQuestion, selectTestData, setTest } from "../../store/slices/test"
import { IOption, ITest } from "../../content"

interface ITestProps {
   navigation: INavigationProp
   route: {
      params: {
         lecture: number
      }
   }
}

const Test: React.FC<ITestProps> = ({ navigation, route }) => {
   const dispatch = useAppDispatch()
   const { fontSize, accent } = useAppSelector(selectSettings)
   const { test, allAnswers, currentQuestion } = useAppSelector(selectTestData)
   const scrollViewRef = useRef<ScrollView>(null)

   useEffect(() => {
      const testFromParams = getTest(route.params.lecture)
      dispatch(setTest(testFromParams))
   }, [])

   if (!test) {
      return null
   }

   const scrollToTop = () => {
      scrollViewRef.current!.scrollTo({ y: 0, animated: false })
   }

   const onInfoPress = () => {
      Alert.alert(
         "Раздел с тестом",
         "В этом разделе необходимо пройти тест, используя знания полученные в ходе изучения лекционного материала"
      )
   }

   const onPrevPress = () => {
      if (currentQuestion !== 0) {
         dispatch(prevCurrentQuestion())
         scrollToTop()
      }
   }

   const onNextPress = () => {
      if (currentQuestion < test.length - 1) {
         dispatch(nextCurrentQuestion())
         scrollToTop()
      } else {
         navigation.navigate("TestResult", { lecture: route.params.lecture })
      }
   }

   return (
      <View>
         <AppHeader
            onInfoPress={onInfoPress}
            navigation={navigation}
            title={"ТЕСТ"}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout>
            <View style={styles.container}>
               <View style={styles.bar}>
                  {test.map((item: ITest, index: number) => (
                     <View
                        key={item.question}
                        style={[
                           styles.barItem,
                           {
                              backgroundColor: currentQuestion === index
                                 ? accent
                                 : allAnswers[index]?.answer
                                    ? "#969696"
                                    : "#DDDDDD"
                           }
                        ]}
                     />
                  ))}
               </View>

               <ScrollView style={styles.questionBox}>
                  <Text
                     style={[
                        { fontSize: fontSize * 1.3 },
                        styles.questionText
                     ]}
                  >
                     {test[currentQuestion]?.question}
                  </Text>
               </ScrollView>

               <ScrollView
                  ref={scrollViewRef}
                  style={styles.options}
               >
                  {test[currentQuestion]?.options.map((option: IOption) => (
                     <AppButton
                        style={{
                           marginBottom: 5,
                           width: "100%",
                           borderColor: allAnswers[currentQuestion]?.answer === option.answer ? "black" : "transparent",
                           borderWidth: 3
                        }}
                        key={option.answer}
                        onPress={() => {
                           dispatch(addAnswer(option))
                        }}
                        title={option.answer}
                        bgColor={accent}
                        fontSize={fontSize}
                     />
                  ))}
               </ScrollView>

               <View style={styles.buttons}>
                  <AppButton
                     onPress={onPrevPress}
                     title={"Назад"}
                     bgColor={accent}
                     disabled={currentQuestion === 0}
                     fontSize={fontSize}
                  />
                  <AppButton
                     onPress={onNextPress}
                     disabled={!allAnswers[currentQuestion]}
                     title={currentQuestion < test.length - 1 ? "Далее" : "К итогам"}
                     bgColor={accent}
                     fontSize={fontSize}
                  />
               </View>
            </View>
         </AppLayout>
      </View>
   )
}

export default Test
