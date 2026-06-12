import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.current = e.clientX; my.current = e.clientY
      if (curRef.current) { curRef.current.style.left = e.clientX + 'px'; curRef.current.style.top = e.clientY + 'px' }
    }
    document.addEventListener('mousemove', move)
    const loop = () => {
      rx.current += (mx.current - rx.current) * 0.13
      ry.current += (my.current - ry.current) * 0.13
      if (ringRef.current) { ringRef.current.style.left = rx.current + 'px'; ringRef.current.style.top = ry.current + 'px' }
      requestAnimationFrame(loop)
    }
    loop()
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (<><div id="cur" ref={curRef} /><div id="cur-r" ref={ringRef} /></>)
}
