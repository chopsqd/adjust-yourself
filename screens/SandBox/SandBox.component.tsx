import React, { useRef, useState } from "react"
import { Alert, Dimensions, Keyboard, ScrollView, Text, TextInput, View } from "react-native"
import { INavigationProp } from "../../AppNavigator"
import { styles } from "./SandBox.style"
import AppButton from "../../ui-kit/AppButton/AppButton.component"
import { useAppSelector } from "../../store/hooks"
import { selectSettings } from "../../store/slices/main"

interface ISandBoxProps {
   navigation: INavigationProp
}

const SandBox: React.FC<ISandBoxProps> = ({ navigation }) => {
   const { fontSize, accent } = useAppSelector(selectSettings)
   const [ codeInput, setCodeInput ] = useState<string>("")
   const [ consoleOutput, setConsoleOutput ] = useState<string>("")
   const [ isResultView, setIsResultView ] = useState<boolean>(false)
   const textInputRef = useRef<TextInput>(null)

   const onHomePress = () => {
      setCodeInput("")
      navigation.navigate("Home")
   }

   const onModeTogglePress = () => {
      setIsResultView(!isResultView)
   }

   const onCompilePress = () => {
      try {
         const result = eval(codeInput)
         setConsoleOutput(JSON.stringify(result))
         setIsResultView(true)
      } catch (error) {
         if (error instanceof Error) {
            Alert.alert("Ошибка", error.message)
            console.log(error)
         } else {
            console.log("Неизвестная ошибка:", error)
         }
      }
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <AppButton
               fontSize={fontSize}
               onPress={onHomePress}
               title={"home"}
               bgColor={accent}
            />

            <View style={styles.headerTextBox}>
               <Text
                  style={[
                     styles.headerText,
                     {
                        fontSize
                     }
                  ]}
               >
                  {isResultView ? "РЕЗУЛЬТАТ" : "ИСХОДНЫЙ КОД"}
               </Text>
            </View>

            <View style={styles.buttons}>
               <AppButton
                  fontSize={fontSize}
                  onPress={onModeTogglePress}
                  title={"home"}
                  bgColor={accent}
               />
               <AppButton
                  fontSize={fontSize}
                  onPress={onCompilePress}
                  title={"home"}
                  bgColor={accent}
               />
            </View>
         </View>

         {isResultView
            ? (
               <ScrollView style={styles.result}>
                  <Text style={{ fontSize }}>{consoleOutput}</Text>
               </ScrollView>
            ) : (
               <TextInput
                  multiline
                  autoFocus
                  ref={textInputRef}
                  onTouchStart={() => {
                     if (!Keyboard.isVisible()) {
                        textInputRef.current!.blur()
                        textInputRef.current!.focus()
                     }
                  }}
                  textAlignVertical={"top"}
                  style={[
                     styles.codeBox,
                     {
                        fontSize,
                        height: Keyboard.metrics()
                           ? Dimensions.get("window").height - Keyboard.metrics()!.height - 100
                           : 200
                     }
                  ]}
                  placeholder={"Введите ваш код здесь"}
                  onChangeText={text => {
                     setCodeInput(text)
                  }}
                  value={codeInput}
               />
            )}
      </View>
   )
}

export default SandBox
