import React from "react"
import { Pressable, Text } from "react-native"
import renderer, { ReactTestRendererJSON } from "react-test-renderer"
import AppButton from "./AppButton.component"
import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"
import { getContent } from "./AppButton.utils"
import { IAppButtonProps } from "./AppButton.types"

const mockProps: IAppButtonProps = {
   title: "Test Button",
   onPress: jest.fn(),
   bgColor: ColorsEnum.Blue,
   fontSize: FontSizeEnum.Medium
}

describe("AppButton Component", () => {
   it("renders correctly", () => {
      const tree = renderer.create(<AppButton {...mockProps} />).toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders correct title", () => {
      const component = renderer.create(<AppButton {...mockProps} />)
      const textComponent = component.root.findByType(Text)
      expect(textComponent.props.children).toBe(mockProps.title)
   })

   it("invokes onPress prop when pressed", () => {
      const component = renderer.create(<AppButton {...mockProps} />)
      const pressableComponent = component.root.findByType(Pressable)
      pressableComponent.props.onPress()
      expect(mockProps.onPress).toHaveBeenCalled()
   })

   it("changes background color when pressed", () => {
      const component = renderer.create(<AppButton {...mockProps} />)
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()

      const pressableInstance = component.root.findByType(Pressable)
      pressableInstance.props.onPress()

      tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders with default backgroundColor when not pressed or disabled", () => {
      const tree = renderer.create(<AppButton {...mockProps} />).toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders with disabled backgroundColor when disabled", () => {
      const tree = renderer.create(<AppButton {...mockProps} />).toJSON() as ReactTestRendererJSON
      expect(tree).toMatchSnapshot()
   })
})

describe("getContent function", () => {
   it("returns gear SVG element", () => {
      const gear = renderer.create(getContent("gear")).toJSON()
      expect(gear).toMatchSnapshot()
   })

   it("returns home SVG element", () => {
      const home = renderer.create(getContent("home")).toJSON()
      expect(home).toMatchSnapshot()
   })

   it("returns question SVG element", () => {
      const question = renderer.create(getContent("question")).toJSON()
      expect(question).toMatchSnapshot()
   })

   it("returns info SVG element", () => {
      const info = renderer.create(getContent("info")).toJSON()
      expect(info).toMatchSnapshot()
   })

   it("returns arrow_left SVG element", () => {
      const arrowLeft = renderer.create(getContent("arrow_left")).toJSON()
      expect(arrowLeft).toMatchSnapshot()
   })

   it("returns arrow_right SVG element", () => {
      const arrowRight = renderer.create(getContent("arrow_right")).toJSON()
      expect(arrowRight).toMatchSnapshot()
   })

   it("returns Text element for unknown title", () => {
      const text = renderer.create(getContent("unknown")).toJSON()
      expect(text).toMatchSnapshot()
   })
})
