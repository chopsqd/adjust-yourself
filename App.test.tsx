import React from "react"
import renderer from "react-test-renderer"
import App from "./App"

describe("<App />", () => {
   test("renders counter text", () => {
      const component = renderer.create(<App />)
      const instance = component.root
      const counterText = instance.findByProps({ testID: "counterText" })
      expect(counterText).toBeDefined()
   })
})
