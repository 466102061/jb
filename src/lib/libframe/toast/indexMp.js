// toast.js
var toast = {};
toast.install = function (Vue, options) {
    Vue.prototype.$toast = (tips) => {
        wx.showToast({
          icon:"none",
          title: tips,
        })
    }
}
export default toast;