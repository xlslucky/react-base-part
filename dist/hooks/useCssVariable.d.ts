declare function useCssVariable(dom?: HTMLElement): {
    getPropertyValue: (key: string) => string;
    setPropertyValue: (key: string, value: string) => void;
    removeProperty: (key: string) => void;
    getPropertiesValue: (keys: string[]) => Record<string, string>;
    setPropertiesValue: (data: Record<string, string>) => void;
};
export default useCssVariable;
