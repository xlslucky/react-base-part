import { VariablesType } from '../constants/variables'

export interface ConfigProviderProps {
  children: React.ReactNode
  variables?: Partial<VariablesType>
}
