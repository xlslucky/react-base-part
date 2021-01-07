declare type PaginationSizeType = 'default' | 'small';
export interface PaginationProps {
    className?: string;
    pageNo: number;
    pageSize: number;
    total: number;
    onChange?: (pageNo: number, pageSize: number) => void;
    size?: PaginationSizeType;
    disabled?: boolean;
    prefixCls?: string;
}
export interface BasePaginationProps {
    className?: string;
    pageNo: number;
    size?: PaginationSizeType;
    disabled?: boolean;
    totalPage: number;
    handleLeftBtn: () => void;
    handleRightBtn: () => void;
    onChangeItem: (num: number) => void;
    prefixCls?: string;
}
export {};
