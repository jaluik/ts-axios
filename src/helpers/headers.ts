import { isObject } from './utl'

function normalizeHeaderName(headers: any, normalizedName: string) {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(headerKey => {
    if (headerKey !== normalizedName && headerKey.toLowerCase() === normalizedName.toLowerCase()) {
      headers[normalizedName] = headers[headerKey]
      delete headers[headerKey]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
