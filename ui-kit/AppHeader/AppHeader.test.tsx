import React from "react"
import { View, Text, Pressable } from "react-native"
import renderer from "react-test-renderer"
import AppHeader from "./AppHeader.component"
import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"

const mockProps = {
   title: "Test Title",
   bgColor: ColorsEnum.Blue,
   fontSize: FontSizeEnum.Medium,
   onInfoPress: jest.fn(),
   navigation: {
      navigate: jest.fn()
   }
}

describe("AppHeader component", () => {
   it("renders correctly", () => {
      const tree = renderer.create(<AppHeader {...mockProps} />).toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("executes onPress callback when button is pressed", () => {
      const component = renderer.create(<AppHeader {...mockProps} />)
      const buttons = component.root.findAllByType(Pressable)
      buttons[0]?.props.onPress()
      expect(mockProps.onInfoPress).toHaveBeenCalled()
   })

   it("navigates to \"Home\" screen when home button is pressed", () => {
      const component = renderer.create(<AppHeader {...mockProps} />)
      const buttons = component.root.findAllByType(Pressable)
      buttons[1]?.props.onPress()
      expect(mockProps.navigation.navigate).toHaveBeenCalledWith("Home")
   })

   it("displays correct title text", () => {
      const component = renderer.create(<AppHeader {...mockProps} />)
      const text = component.root.findByType(Text)
      expect(text.props.children).toBe(mockProps.title)
   })

   it("applies correct background color to header view", () => {
      const component = renderer.create(<AppHeader {...mockProps} />)
      const view = component.root.findByType(View)
      const bgColor = view.props.style.find((style: {backgroundColor: string}) => style.backgroundColor)
      expect(bgColor.backgroundColor).toBe(mockProps.bgColor)
   })

   it("applies correct font size to title text", () => {
      const component = renderer.create(<AppHeader {...mockProps} />)
      const text = component.root.findByType(Text)
      const fSize = text.props.style.find((style: {fontSize: string}) => style.fontSize)
      expect(fSize.fontSize).toBe(mockProps.fontSize)
   })
})
