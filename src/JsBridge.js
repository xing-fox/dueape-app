const JsBridge = {
  /**
   * 获取token
   */
  GetIosMethods: callback => {
    if (window.WebViewJavascriptBridge) return callback(WebViewJavascriptBridge)
    if (window.WVJBCallbacks) return window.WVJBCallbacks.push(callback)
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
  }
}

export default JsBridge
