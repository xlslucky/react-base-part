module.exports = componentName => ({
  content: `import React from 'react'

import { ${componentName}Props } from './${componentName}.types'

import './${componentName}.scss'

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="foo-bar">
    {foo}
  </div>
)

export default ${componentName}
`,
  extension: `.tsx`,
})
