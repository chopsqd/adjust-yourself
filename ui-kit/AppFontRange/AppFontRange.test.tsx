import React from "react"
import { Text } from "react-native"
import { create } from "react-test-renderer"
import AppFontRange from "./AppFontRange.component"
import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"
import Slider from "@react-native-community/slider"

describe("AppFontRange Component", () => {
   test("renders correctly", () => {
      const tree = create(
         <AppFontRange
            value={2}
            onChange={() => {}}
            fontSize={16}
            bgColor={ColorsEnum.Blue}
         />
      ).toJSON()
      expect(tree).toMatchSnapshot()
   })

   test("renders text with correct font size", () => {
      const fontSize = 14
      const component = create(
         <AppFontRange
            value={2}
            onChange={() => {}}
            fontSize={FontSizeEnum.Medium}
            bgColor={ColorsEnum.Blue}
         />
      )
      const instance = component.root
      const textComponent = instance.findByType(Text)
      expect(textComponent.props.style.fontSize).toBe(fontSize)
   })

   test("invokes onChange handler correctly", () => {
      const mockOnChange = jest.fn()
      const component = create(
         <AppFontRange
            value={2}
            onChange={mockOnChange}
            fontSize={16}
            bgColor={ColorsEnum.Blue}
         />
      )
      const instance = component.root
      const sliderComponent = instance.findByType(Slider)
      sliderComponent.props.onValueChange(3)
      expect(mockOnChange).toHaveBeenCalled()
   })

   test("renders slider with correct initial value", () => {
      const initialValue = 2
      const component = create(
         <AppFontRange
            value={initialValue}
            onChange={() => {}}
            fontSize={16}
            bgColor={ColorsEnum.Blue}
         />
      )
      const instance = component.root
      const sliderComponent = instance.findByType(Slider)
      expect(sliderComponent.props.value).toBe(initialValue)
   })
})
