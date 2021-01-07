declare function useBasePage(pageNo: number, totalPage: number): {
    hasLeft: boolean;
    centerStartNo: number;
    centerEndNo: number;
    hasRight: boolean;
};
export default useBasePage;
