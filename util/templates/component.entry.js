module.exports = componentName => ({
  content: `import ${componentName} from './${componentName}'

export default ${componentName}
`,
  extension: '.stories.tsx',
  full: 'index.tsx',
})
