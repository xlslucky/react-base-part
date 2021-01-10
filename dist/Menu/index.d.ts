import BaseMenu from './Menu';
import MenuItem from './MenuItem';
declare type MenuType = typeof BaseMenu & {
    Item: typeof MenuItem;
};
declare const Menu: MenuType;
export default Menu;
