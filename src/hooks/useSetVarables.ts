import React from 'react'

import { VariablesType } from '../constants/variables'

import useCssVarable from './useCssVarable'

import fullVariables from '../constants/variables'

// 样式优先级 ConfigProvider variables > document.body variables > 内置 variables
function useSetVarables(variables: Partial<VariablesType> | undefined) {
  const { getPropertysValue, setPropertysValue } = useCssVarable()

  React.useEffect(() => {
    const prevVariables = getPropertysValue(Object.keys(fullVariables))
    const newVariables = { ...fullVariables, ...prevVariables, ...variables }
    setPropertysValue(newVariables)
  }, [getPropertysValue, setPropertysValue, variables])
}

export default useSetVarables
