import { computed } from 'vue'
import { useStore } from 'vuex'

export function useDropdownOption(commitPath, optionPath) {
  const store = useStore()
  const currentOption = computed(() => store.state.invoices[optionPath])

  function commitOption(option) {
    store.commit(commitPath, option)
  }

  return { currentOption, commitOption }
}
