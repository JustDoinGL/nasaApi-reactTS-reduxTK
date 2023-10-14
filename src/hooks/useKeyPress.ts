import { useState, useEffect } from 'react'

export function useKeyPress(target: string): boolean {
  const [isPressed, setPressed] = useState(false)

  useEffect(() => {
    const handleDown = ({ key }: KeyboardEvent) => {
      if (key === target) {
        setPressed(true)
      }
    }

    const handleUp = ({ key }: KeyboardEvent) => {
      if (key === target) {
        setPressed(false)
      }
    }

    window.addEventListener('keydown', handleDown)
    window.addEventListener('keyup', handleUp)

    return () => {
      window.removeEventListener('keydown', handleDown)
      window.removeEventListener('keyup', handleUp)
    }
  }, [target])

  return isPressed
}