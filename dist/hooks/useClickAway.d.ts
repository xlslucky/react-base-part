import React from 'react';
declare type RefType = React.RefObject<HTMLElement>;
declare const useClickAway: <E extends Event = Event>(ref: RefType | RefType[], onClickAway: (event: E) => void, events?: string[]) => void;
export default useClickAway;
