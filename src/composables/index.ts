import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export async function useApiFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiUrl,
    key: url,
    headers: {
      token: '2zcgJnjDyb'
    }
  }
  
  const params = defu(options, defaults)
  return useFetch(url, params)
}
