import { defineStore } from 'pinia'

export const useFetchStore = defineStore('fetchStore', () => {
  const data = ref<ResponseBody | null>()

  const setData = async (responseBody: ResponseBody | null) => {
    data.value = responseBody
  }

  return {
    data,
    setData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFetchStore, import.meta.hot))
}
