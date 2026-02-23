import { useEffect, useRef } from "react"

function useActiveSectionObserver(id, setActiveSection) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if(entry.target.id === "home") {
            setActiveSection(null)
            return
          }
          setActiveSection(id)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [id, setActiveSection])

  return ref
}

export default useActiveSectionObserver