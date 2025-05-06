"use client"

import { useRef, useEffect } from "react"

export default function ContentAnimation({ children, delay = 0 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (elementRef.current) {
      elementRef.current.style.transitionDelay = `${delay}s`
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={elementRef} className="content-animation opacity-0">
      {children}
    </div>
  )
}
