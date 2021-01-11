interface ClickEventType {
  item: React.ReactElement
  key: React.ReactText
}

/**
 * 解决 undefined 报错问题
 * <Menu>
 *  <Menu.Item value={1}>1</Menu.Item>
 *  {Math.random() > 0.5 ? <Menu.Item value={2}>2</Menu.Item> : undefined}
 *  <Menu.Item value={3}>3</Menu.Item>
 * </Menu>
 */
type ChildrenType = React.ReactElement | undefined | null

export interface MenuProps {
  children: ChildrenType[] | ChildrenType
  defaultSelectedKeys?: React.ReactText[]
  onClick?: ({ item, key }: ClickEventType) => void
  prefixCls?: string
}
