import { useMemo } from 'react'

export default function useRandomItem(items) {
  return useMemo(() => {
    if (!Array.isArray(items) || items.length === 0) {
      return null
    }
    return items[Math.floor(Math.random() * items.length)]
  }, [items])
}
