// https://github.com/streamich/react-use/blob/master/src/useClickAway.ts
import React from 'react'

const defaultEvents = ['mousedown', 'touchstart']

type RefType = React.RefObject<HTMLElement>

const useClickAway = <E extends Event = Event>(
  ref: RefType | RefType[],
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = React.useRef(onClickAway)

  React.useEffect(() => {
    savedCallback.current = onClickAway
  }, [onClickAway])

  React.useEffect(() => {
    const handler = (event: any) => {
      const refs = Array.isArray(ref) ? ref : [ref]
      const flag = refs.every(curRef => {
        const { current: el } = curRef
        return el && !el.contains(event.target)
      })
      if (flag) {
        savedCallback.current(event)
      }
    }

    for (let i = 0; i < events.length; i += 1) {
      document.addEventListener(events[i], handler)
    }

    return () => {
      for (let i = 0; i < events.length; i += 1) {
        document.removeEventListener(events[i], handler)
      }
    }
  }, [events, ref])
}

export default useClickAway
