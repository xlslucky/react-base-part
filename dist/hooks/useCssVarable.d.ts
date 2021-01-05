declare function useCssVarable(dom?: HTMLElement): {
    getPropertyValue: (key: string) => string;
    setPropertyValue: (key: string, value: string) => void;
    removeProperty: (key: string) => void;
    getPropertysValue: (keys: string[]) => Record<string, string>;
    setPropertysValue: (data: Record<string, string>) => void;
};
export default useCssVarable;
