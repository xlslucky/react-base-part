module.exports = componentName => ({
  content: `import React from 'react'
import ${componentName} from '.'

import '../style/storybook.scss'

export default {
  title: '${componentName}',
}

export const Default = () => <${componentName} />
`,
  extension: `.stories.tsx`,
})
