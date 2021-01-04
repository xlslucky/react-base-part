import React from 'react'

import BaseIcon from '../BaseIcon'
import { BaseIconProps } from '../Icons.types'

function IconClose(props: BaseIconProps) {
  return (
    <BaseIcon {...props}>
      <svg viewBox="0 0 1024 1024">
        <path d="M-29.87235908 136.85759737m83.36497822-83.36497823l0 0q83.36497821-83.36497821 166.72995645 0l750.28480527 750.28480527q83.36497821 83.36497821 0 166.72995645l0 0q-83.36497821 83.36497821-166.72995645 0l-750.28480527-750.28480527q-83.36497821-83.36497821 0-166.72995645Z"></path>
        <path d="M887.14240263-29.87235908m83.36497823 83.36497822l0 0q83.36497821 83.36497821 0 166.72995645l-750.28480527 750.28480527q-83.36497821 83.36497821-166.72995645 0l0 0q-83.36497821-83.36497821 0-166.72995645l750.28480527-750.28480527q83.36497821-83.36497821 166.72995645 0Z"></path>
      </svg>
    </BaseIcon>
  )
}

export default IconClose
