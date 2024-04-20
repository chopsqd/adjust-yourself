import React from "react"
import renderer from "react-test-renderer"
import AppProgressBar from "./AppProgressBar.component"

describe("AppProgressBar component", () => {
   test("renders correctly with given props", () => {
      const props = {
         title: "Test Progress",
         complete: 5,
         fontSize: 16
      }

      const component = renderer.create(<AppProgressBar {...props} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   test("renders correctly when complete is 10", () => {
      const props = {
         title: "Test Progress",
         complete: 10,
         fontSize: 16
      }

      const component = renderer.create(<AppProgressBar {...props} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })
})
