import { isObject } from './utl'

export function transformRequest(data: any): any {
  if (isObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any) {
  if (typeof data === 'string') {
    try {
      data = JSON.stringify(data)
    } catch (e) {}
  }
  return data
}
