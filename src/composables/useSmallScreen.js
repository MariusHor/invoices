import { useMediaQuery } from '@vueuse/core'

export function useSmallScreen() {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  return { isSmallScreen }
}
