// lib
import React from 'react'
import ReactDOM from 'react-dom'

// components

// styles
// import styles from './Portal.module.less'

type PortalProps = React.PropsWithChildren<{
  getContainer: () => HTMLElement
}>

export default function Portal({ children, getContainer }: PortalProps) {
  const containerRef = React.useRef<HTMLElement>()

  const initRef = React.useRef(false)

  if (!initRef.current) {
    containerRef.current = getContainer()
    initRef.current = true
  }

  React.useEffect(() => {
    // return () => {
    //   containerRef.current?.parentNode?.removeChild(containerRef.current)
    // }
  }, [])

  return containerRef.current
    ? ReactDOM.createPortal(children, containerRef.current)
    : null
}
