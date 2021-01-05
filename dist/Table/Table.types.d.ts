/// <reference types="react" />
import { EmptyDescriptionType } from '../Empty/Empty.types';
import { PaginationProps } from '../Pagination/Pagination.types';
export declare type ColumnType<T> = {
    title: string;
    dataIndex?: keyof T;
    key?: string;
    hide?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: number;
    render?: (item: any, record: T, index: number) => React.ReactNode;
};
export interface TableContextType<T = any> {
    onChangeCheckbox?: (item: T) => (e: any) => void;
    showCheckbox?: boolean;
    isChecked?: (item: T) => boolean;
    isDisabled?: (item: T) => boolean;
    showNo?: boolean;
    columns: ColumnType<T>[];
    onRow?: (item: T) => any;
    getCount: (index: number) => number;
    countRender: (count: number, item: T) => React.ReactNode;
}
export interface TableProps<T> {
    columns: ColumnType<T>[];
    dataSource: T[];
    rowKey: string;
    showNo?: boolean;
    loading?: boolean;
    pagination?: PaginationProps;
    description?: EmptyDescriptionType;
    onRow?: (item: T) => any;
    className?: string;
    countRender?: (count: number, item: T) => React.ReactNode;
    batch?: boolean;
    checkedList?: T[];
    onChangeCheckbox?: (list: T[]) => void;
    disabledList?: Array<number | string>;
    prefixCls?: string;
}
