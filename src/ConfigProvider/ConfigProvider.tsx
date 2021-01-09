import React from 'react'

import { ConfigProviderProps } from './ConfigProvider.types'

import useSetVarables from '../hooks/useSetVariables'

const ConfigContext = React.createContext({})

const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  variables,
}) => {
  useSetVarables(variables)
  return <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>
}

export default ConfigProvider
