import React from 'react';
declare type PortalProps = React.PropsWithChildren<{
    getContainer: () => HTMLElement;
}>;
export default function Portal({ children, getContainer }: PortalProps): React.ReactPortal | null;
export {};
