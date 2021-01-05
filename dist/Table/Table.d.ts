import { TableProps } from './Table.types';
import './Table.scss';
declare function Table<T extends Record<string, any>>(props: TableProps<T>): JSX.Element;
export default Table;
