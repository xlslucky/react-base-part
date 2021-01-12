import React from 'react'
import Select from '.'

import '../style/storybook.scss'

export default {
  title: 'Select',
}

export const Default = () => (
  <div>
    <Select placeholder="请选择" style={{ width: 171, display: 'inline-flex' }}>
      <Select.Option value={1}>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </Select.Option>
      <Select.Option value={2}>2</Select.Option>
      <Select.Option value={3}>3</Select.Option>
      <Select.Option value={4}>4</Select.Option>
      <Select.Option value={5}>5</Select.Option>
      <Select.Option value={6}>6</Select.Option>
      <Select.Option value={1}>1</Select.Option>
      <Select.Option value={2}>2</Select.Option>
      <Select.Option value={3}>3</Select.Option>
      <Select.Option value={4}>4</Select.Option>
      <Select.Option value={5}>5</Select.Option>
      <Select.Option value={6}>6</Select.Option>
    </Select>
    <Select placeholder="请选择" style={{ width: 171, display: 'inline-flex' }}>
      <Select.Option value={1}>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </Select.Option>
      <Select.Option value={2}>2</Select.Option>
      <Select.Option value={3}>3</Select.Option>
      <Select.Option value={4}>4</Select.Option>
      <Select.Option value={5}>5</Select.Option>
      <Select.Option value={6}>6</Select.Option>
      <Select.Option value={1}>1</Select.Option>
      <Select.Option value={2}>2</Select.Option>
      <Select.Option value={3}>3</Select.Option>
      <Select.Option value={4}>4</Select.Option>
      <Select.Option value={5}>5</Select.Option>
      <Select.Option value={6}>6</Select.Option>
    </Select>
  </div>
)
