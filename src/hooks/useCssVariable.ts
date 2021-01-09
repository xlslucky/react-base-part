import React from 'react'

import { isEmpty } from '../utils'

function useCssVariable(dom: HTMLElement = document.body) {
  // 获取css变量
  const getPropertyValue = React.useCallback(
    (key: string) => {
      return dom.style.getPropertyValue(key).trim()
    },
    [dom.style]
  )

  // 设置css变量
  const setPropertyValue = React.useCallback(
    (key: string, value: string) => {
      let newKey = key
      if (key.indexOf('--') === -1) {
        newKey = `--${key}`
      }
      dom.style.setProperty(newKey, value)
    },
    [dom.style]
  )

  // 删除css变量
  const removeProperty = React.useCallback(
    (key: string) => {
      dom.style.removeProperty(key)
    },
    [dom.style]
  )

  // 批量获取css变量
  const getPropertiesValue = React.useCallback(
    (keys: string[]) => {
      const data: Record<string, string> = {}
      keys.forEach(key => {
        const value = getPropertyValue(key)
        if (!isEmpty(value)) {
          data[key] = value
        }
      })
      return data
    },
    [getPropertyValue]
  )

  // 批量设置css变量
  const setPropertiesValue = React.useCallback(
    (data: Record<string, string>) => {
      Object.keys(data).forEach(key => {
        const value = data[key]
        if (!isEmpty(value)) {
          setPropertyValue(key, data[key])
        }
      })
    },
    [setPropertyValue]
  )

  return {
    getPropertyValue,
    setPropertyValue,
    removeProperty,
    getPropertiesValue,
    setPropertiesValue,
  }
}

export default useCssVariable
