//ajax请求
export default async function httpRequest(options = {}) {
  const result = await new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: Object.assign({}, options.data),
      method: options.methods || 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: resolve,
      fail: reject
    })
  })
  return result
}