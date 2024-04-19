import React from "react"
import { Text, View } from "react-native"
import renderer, { ReactTestRendererJSON } from "react-test-renderer"
import AppLayout from "./AppLayout.component"

describe("AppLayout component", () => {
   it("renders correctly", () => {
      const tree = renderer.create(<AppLayout>Hello World</AppLayout>).toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders children correctly", () => {
      const component = renderer.create(
         <AppLayout>
            <Text>Test Children</Text>
         </AppLayout>
      )

      const textComponent = component.root.findByType(Text)
      expect(textComponent.props.children).toBe("Test Children")
   })

   it("applies styles correctly", () => {
      const component = renderer.create(
         <AppLayout>
            <Text>Test Children</Text>
         </AppLayout>
      )
      const tree = component.toJSON() as ReactTestRendererJSON

      expect(tree?.props.style).toMatchObject({
         width: "100%",
         height: "100%",
         backgroundColor: "#fff"
      })

      const container = component.root.findByType(View)
      expect(container.props.style).toMatchObject({
         width: "100%"
      })
   })
})
