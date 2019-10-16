import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processCofig(config)
  xhr(config)
}

function processCofig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: AxiosRequestConfig) {
  const { data } = config
  return transformRequest(data)
}

export default axios
