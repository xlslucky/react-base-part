import React from 'react'

import { VariablesType } from '../constants/variables'

import useCssVarable from './useCssVariable'

import fullVariables from '../constants/variables'

// 样式优先级 ConfigProvider variables > document.body variables > 内置 variables
function useSetVariables(variables: Partial<VariablesType> | undefined) {
  const { getPropertiesValue, setPropertiesValue } = useCssVarable()

  React.useEffect(() => {
    const prevVariables = getPropertiesValue(Object.keys(fullVariables))
    const newVariables = { ...fullVariables, ...prevVariables, ...variables }
    setPropertiesValue(newVariables)
  }, [getPropertiesValue, setPropertiesValue, variables])
}

export default useSetVariables
