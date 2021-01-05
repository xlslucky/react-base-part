import React from 'react';
import { TableContextType } from './Table.types';
declare const TableContext: React.Context<TableContextType<any>>;
export default TableContext;
export declare function useTableContext(): TableContextType<any>;
