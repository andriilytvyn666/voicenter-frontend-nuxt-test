import { defineStore } from 'pinia'

export const useFetchStore = defineStore('fetchStore', () => {
  const data = ref<ResponseBody | null>()
  const itemsJson = ref<Array<Item>>()

  const setData = async (responseBody: ResponseBody | null) => {
    data.value = responseBody
  }

  const setItemsJson = async (items: Array<Item>) => {
    itemsJson.value = items
  }

  return {
    itemsJson,
    setItemsJson,
    data,
    setData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFetchStore, import.meta.hot))
}
