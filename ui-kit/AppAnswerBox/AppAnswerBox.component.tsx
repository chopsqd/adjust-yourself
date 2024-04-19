import React from "react"
import { View, Text } from "react-native"
import { IAppAnswerBoxProps } from "./AppAnswerBox.types"
import { styles } from "./AppAnswerBox.style"

const AppAnswerBox: React.FC<IAppAnswerBoxProps> = (props) => {
   const { question, answer, isCorrect, fontSize } = props

   return (
      <View
         style={[
            {
               backgroundColor: isCorrect ? "#51FF6C" : "#FF5454"
            },
            styles.box
         ]}
      >
         <Text style={{ fontWeight: "bold" }}>Вопрос: </Text>
         <Text
            style={[
               { fontSize },
               styles.question
            ]}
         >
            {question}
         </Text>

         <Text style={{ fontWeight: "bold" }}>Ответ: </Text>
         <Text
            style={[
               { fontSize }
            ]}
         >
            {answer}
         </Text>
      </View>
   )
}

export default AppAnswerBox
