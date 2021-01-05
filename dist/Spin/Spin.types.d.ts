/// <reference types="react" />
import { PaginationProps } from '../Pagination/Pagination.types';
import { EmptyProps, EmptyDescriptionType } from '../Empty/Empty.types';
export declare type SpinProps = React.PropsWithChildren<{
    loading?: boolean;
    empty?: boolean;
    customEmpty?: React.ReactNode;
    customLoading?: React.ReactNode;
    description?: EmptyDescriptionType;
    pagination?: PaginationProps;
    emptyProps?: EmptyProps;
    prefixCls?: string;
}>;
