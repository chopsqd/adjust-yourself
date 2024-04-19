import React from "react"
import renderer from "react-test-renderer"
import AppLevelBox from "./AppLevelBox.component"

describe("AppLevelBox Component", () => {
   it("renders correctly with props", () => {
      const tree = renderer
         .create(
            <AppLevelBox
               title={"Test Title"}
               disabled={false}
               fontSize={16}
            />
         )
         .toJSON()
      expect(tree).toMatchSnapshot()
   })

   it("renders correctly when disabled", () => {
      const tree = renderer
         .create(
            <AppLevelBox
               title={"Disabled Title"}
               disabled={true}
               fontSize={18}
            />
         )
         .toJSON()
      expect(tree).toMatchSnapshot()
   })
})
