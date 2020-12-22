import React from 'react'

import { TestProps } from './Test.types'

import './Test.scss'

const Test: React.FC<TestProps> = ({ foo }) => (
  <div data-testid="Test" className="foo-bar">
    {foo}
  </div>
)

export default Test
