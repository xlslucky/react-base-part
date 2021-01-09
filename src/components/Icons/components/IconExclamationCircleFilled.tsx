import React from 'react'

import BaseIcon from '../BaseIcon'
import { BaseIconProps } from '../Icons.types'

function IconExclamationCircleFilled(props: BaseIconProps) {
  return (
    <BaseIcon {...props}>
      <svg viewBox="0 0 1024 1024">
        <path d="M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8z m0 736.61538431a38.76923039 38.76923039 0 1 0 0 77.53846177 38.76923039 38.76923039 0 0 0 0-77.53846177z m0-542.76923039a38.76923039 38.76923039 0 0 0-38.76923039 38.76923039v387.69230785a38.76923039 38.76923039 0 0 0 77.53846078 0V240.61538431a38.76923039 38.76923039 0 0 0-38.76923039-38.76923039z" />
      </svg>
    </BaseIcon>
  )
}

export default IconExclamationCircleFilled
