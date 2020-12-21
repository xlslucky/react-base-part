// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

import Test from "./Test"
import { TestProps } from "./Test.types"

describe("Test Component", () => {
  let props: TestProps

  beforeEach(() => {
    props = {
      foo: "bar"
    }
  })

  const renderComponent = () => render(<Test {...props} />)

  it("should render foo text correctly", () => {
    props.foo = "xlslucky was here"
    const { getByTestId } = renderComponent()

    const component = getByTestId("Test")

    expect(component).toHaveTextContent("xlslucky was here")
  })
})
