import './Loading.scss';
interface LoadingProps {
    className?: string;
}
declare const Loading: {
    ({ className }: LoadingProps): JSX.Element;
    Ellipsis: () => JSX.Element;
    Melody: () => JSX.Element;
};
export default Loading;
