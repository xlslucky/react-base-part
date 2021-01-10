import BaseMenu from './Menu'
import MenuItem from './MenuItem'

type MenuType = typeof BaseMenu & {
  Item: typeof MenuItem
}

const Menu = BaseMenu as MenuType

Menu.Item = MenuItem

export default Menu
