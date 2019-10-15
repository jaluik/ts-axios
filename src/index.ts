import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processCofig(config)
  xhr(config)
}

function processCofig(config: AxiosRequestConfig): void {
  console.log(transformUrl(config))
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
