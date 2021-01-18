import React from 'react'
import Pagination from '.'

import '../style/storybook.scss'

export default {
  title: 'Pagination',
  component: Pagination,
}

export const Default = () => {
  return (
    <div>
      <div>
        <Pagination pageNo={1} pageSize={10} total={90} />
      </div>
      <div>
        <Pagination size="small" pageNo={1} pageSize={10} total={100} />
      </div>
    </div>
  )
}
