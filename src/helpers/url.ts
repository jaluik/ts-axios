import { isDate, isObject } from './utl'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }
  let str: string[] = []
  Object.keys(params).forEach(key => {
    let val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    console.log(values)
    values.forEach(value => {
      let handledValue: string = value
      if (isDate(value)) {
        handledValue = value.toISOString()
      } else if (isObject(value)) {
        handledValue = JSON.stringify(value)
      }
      str.push(`${encode(key)}=${encode(handledValue)}`)
    })
  })

  let serializedParas = str.join('&')
  if (serializedParas) {
    let markIndex = url.indexOf('#')
    let newUrl: string = url
    if (markIndex !== -1) {
      newUrl = url.slice(0, markIndex)
    }
    let link = newUrl.indexOf('?') !== -1 ? '&' : '?'
    return newUrl + link + serializedParas
  } else {
    return url
  }
}
