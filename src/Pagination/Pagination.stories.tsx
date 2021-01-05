import React from 'react'
import Pagination from '.'

import '../style/storybook.scss'

export default {
  title: 'Pagination',
}

export const Default = () => <Pagination pageNo={1} pageSize={10} total={100} />
