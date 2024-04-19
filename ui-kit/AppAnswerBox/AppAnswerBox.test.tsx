import React from "react"
import { Text, View } from "react-native"
import renderer from "react-test-renderer"
import AppAnswerBox from "./AppAnswerBox.component"
import { FontSizeEnum } from "../../services/StorageService/Storage.types"

describe("AppAnswerBox component", () => {
   const props = {
      question: "What is 2 + 2?",
      answer: "4",
      isCorrect: true,
      fontSize: FontSizeEnum.Medium
   }

   it("renders correctly with correct answer", () => {
      const tree = renderer.create(<AppAnswerBox {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders correctly with incorrect answer", () => {
      const tree = renderer
         .create(<AppAnswerBox {...props} isCorrect={false} />)
         .toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders question and answer texts correctly", () => {
      const component = renderer.create(<AppAnswerBox {...props} />)
      const instance = component.root

      const texts = instance.findAllByType(Text)
      expect(texts[0]?.props.children).toEqual("Вопрос: ")
      expect(texts[1]?.props.children).toEqual("What is 2 + 2?")
      expect(texts[2]?.props.children).toEqual("Ответ: ")
      expect(texts[3]?.props.children).toEqual("4")
   })

   it("applies correct styles based on isCorrect prop", () => {
      const componentCorrect = renderer.create(<AppAnswerBox {...props} />)
      const instanceCorrect = componentCorrect.root
      expect(instanceCorrect).toBeTruthy()

      const correctBox = instanceCorrect.findByType(View)
      expect(correctBox).toBeTruthy()

      const backgroundColor = correctBox.props.style.find((style: {backgroundColor: string}) => style.backgroundColor)
      expect(backgroundColor).toBeDefined()
      expect(backgroundColor.backgroundColor).toEqual("#51FF6C")
   })
})
