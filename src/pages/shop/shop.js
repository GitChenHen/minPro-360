// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "swiperList":[
      {
        "id":1,
        "linkUrl":"",
        "imgUrl":"https://p4.ssl.qhimg.com/dr/750_0_85/t01bea9d4585843ab01.webp"
      },
      {
        "id":2,
        "linkUrl":"",
        "imgUrl":"https://p4.ssl.qhimg.com/dr/750_0_85/t017317cec955bc95de.webp"
      },
      {
        "id":3,
        "linkUrl":"",
        "imgUrl":"https://p5.ssl.qhimg.com/dr/750_0_85/t018d50f559f2953a54.webp"
      },
      {
        "id":4,
        "linkUrl":"",
        "imgUrl":"https://p0.ssl.qhimg.com/dr/750_0_85/t015794bb4de0b874f3.webp"
      },
    ]
  },
// 点击搜索跳转
  onClickSearch:function(options){
  wx.navigateTo({
    url: '../search/search',
  })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})