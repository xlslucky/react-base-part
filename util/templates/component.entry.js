module.exports = componentName => ({
  content: `export { default as ${componentName} } from './${componentName}'
`,
  extension: '.stories.tsx',
  full: 'index.tsx',
})
