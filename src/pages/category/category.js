// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    category: [],
    secondary:[],
    spread:[]
  },

  // 点击左侧列表项方法
  onClickChangeListItem: function(event) {
    // 调试输出索引号
    console.log(event.target.dataset.index);
    // 设置页面信息，改变索引数字，刷新视图
    this.setData({
      activeIndex: event.target.dataset.index
    })
  },
  // 点击左侧更新右侧列表项内容
  onChangeListData: function (event) {
    // 设置页面信息，改变索引数字，刷新视图
    this.setData({
      activeIndex: event.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //调用封装数据
    this.getCategoryList();
    this.getCategoryContent();
  },
  /*
   *封装左边获取分类一级标题
   */
  getCategoryList: function() {
    wx.request({
      url: 'https://mall.360.cn/app/getAppCategory',
      success: (res) => {
        console.log(res.data.data.category),
          this.setData({
            category: res.data.data.category
          })
      }
    })
  },
  /*
   *获取右边分类二级内容
   */
  getCategoryContent: function() {
    wx.request({
      url: 'https://mall.360.cn/app/getSecondaryCategory',
      data: {
        //请求参数  用来切换二级目录
        id: 1
      },
      success: res => {
        //调试输出所有数据
        console.log(res);
        //提取secondary、spread数据  --》结构赋值法
        let{
          secondary,spread
        } = res.data.data;
        // console.log(secondary);
        //那数据设置到页面中
        this.setData({
          secondary:secondary,
          spread:spread
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})