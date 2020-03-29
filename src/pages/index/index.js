Page({

  /**
   * 页面的初始数据
   */
  data: {
    "swiperList":[
      {
        "id": 0,
        "imgUrl": "//p0.ssl.qhimg.com/t0193916ba2ced82e6c.png"
      },
      {
        "id": 1,
        "imgUrl": "//p1.ssl.qhimg.com/t0112454b2ad89460e8.png"
      },
      {
        "id": 2,
        "imgUrl": "//p1.ssl.qhmsg.com/t01dd057241efdad2ad.png"
      }
    ],
    "indicator-dots":true,
    "autoplay":true,
    "interval":3000,
    "duration":1000,
    "entryList":[
      {
        "id":0,
        "linkUrl":"",
        "imgUrl":"//p0.ssl.qhimg.com/t01f222be1309c2fd7f.png",
        "text":"全部产品"
      },
      {
        "id":1,
        "linkUrl":"",
        "imgUrl":"//p4.ssl.qhimg.com/t01d7427e1f6239b1b1.png",
        "text":"360搜索"
      },
      {
        "id":2,
        "linkUrl":"",
        "imgUrl":"//p0.ssl.qhimg.com/t01235788f8980fb490.png",
        "text":"360会员商城"
      },
      {
        "id":3,
        "linkUrl":"",
        "imgUrl":"//p1.ssl.qhimg.com/t0192c6a682125e6cc9.png",
        "text":"360游戏"
      }
    ],
    "softwareList":[
      {
        "id":1,
        "imgUrl":"//p1.ssl.qhmsg.com/d/inn/2edf2228/aqrj/weishi_60.png",
        "title":"手机卫士",
        "number":"8.95M",
        "download":"下载"
      },
      {
        "id":2,
        "imgUrl":"//p3.ssl.qhimg.com/d/inn/2edf2228/aqrj/Box_60.png",
        "title":"手机助手",
        "number":"9.95M",
        "download":"下载"
      },
      {
        "id":3,
        "imgUrl":"//p1.ssl.qhmsg.com/t01c5bfd5968d038a63.png",
        "title":"浏览器",
        "number":"8.95M",
        "download":"下载"
      },
      {
        "id":4,
        "imgUrl":"//p3.ssl.qhimg.com/t015eebd58e3c9362f7.png",
        "title":"清理大师",
        "number":"28.95M",
        "download":"下载"
      },
      {
        "id":5,
        "imgUrl":"//p2.ssl.qhmsg.com/t01e2a809acc329ae82.png",
        "title":"影视大全",
        "number":"18.95M",
        "download":"下载"
      },
      {
        "id":6,
        "imgUrl":"//p1.ssl.qhmsg.com/t01ac094f0e7138f4c1.png",
        "title":"省电王",
        "number":"12.95M",
        "download":"下载"
      },
      {
        "id":7,
        "imgUrl":"//p4.ssl.qhmsg.com/t01e4c126e44c6e0e47.png",
        "title":"免费WIFI",
        "number":"21.95M",
        "download":"下载"
      },
      {
        "id":8,
        "imgUrl":"//p1.ssl.qhmsg.com/t015c4a525a2379d9f6.png",
        "title":"ROOT",
        "number":"4.8M",
        "download":"下载"
      }
    ],
    "softwarebottomList":[
      {
        "id":1,
        "imgUrl":"//p1.ssl.qhmsg.com/t01dc430e8c4fbc2aee.png",
        "title":"360搜索"
      },
      {
        "id":2,
        "imgUrl":"//p2.ssl.qhimg.com/t01eb2fa39da7e4001c.png",
        "title":"会员商城"
      },
      {
        "id":3,
        "imgUrl":"//p4.ssl.qhmsg.com/t01f9b7903b471806d0.png",
        "title":"手机专家"
      },
      {
        "id":4,
        "imgUrl":"//p2.ssl.qhmsg.com/t01946e38139012bf1a.png",
        "title":"流量卫士"
      },
      {
        "id":5,
        "imgUrl":"//p1.ssl.qhmsg.com/t01a03df1ddec4c9046.png",
        "title":"360天气"
      },
      {
        "id":6,
        "imgUrl":"//p0.ssl.qhmsg.com/t01a1539e3423346062.png",
        "title":"360金融"
      },
      {
        "id":7,
        "imgUrl":"//p1.ssl.qhimg.com/t01bccedbc0d45dd194.png",
        "title":"360搜索"
      },
      {
        "id":8,
        "imgUrl":"//p2.ssl.qhimg.com/t01dfc013c7b3c21ac3.png",
        "title":"信用卫士"
      }
    ],
    "hardwareList":[
      {
        "id":1,
        "imgUrl":"////p2.ssl.qhimg.com/t01c197fe3ac30ff1ef.png",
        "title":"360家庭防火墙路由器5S",
        "info":"为家守护的黑科技路由",
        "price":1700
      },
      {
        "id":2,
        "imgUrl":"//p3.ssl.qhimg.com/t013329bb6b92d78417.png",
        "title":"360AI音箱MAX－M1",
        "info":"澎湃音质 双重智能",
        "price":190
      },
      {
        "id":3,
        "imgUrl":"//p1.ssl.qhimg.com/t0196759c96bd031f8f.png",
        "title":"360可视门铃",
        "info":"家庭安全的最佳守门员",
        "price":660
      },
      {
        "id":4,
        "imgUrl":"//p5.ssl.qhimg.com/t0181d5733b6dc321ba.png",
        "title":"360扫地机器人S7",
        "info":"为家守护的黑科技路由",
        "price":1700
      },
      {
        "id":5,
        "imgUrl":"//p1.ssl.qhimg.com/t010d9a0f282c75a188.png",
        "title":"360儿童安全座椅智能头等舱",
        "info":"为家守护的黑科技路由",
        "price":1700
      },    
      {
        "id":6,
        "imgUrl":"//p5.ssl.qhimg.com/t012a3289c21c303a14.png",
        "title":"360儿童手表8X",
        "info":"为家守护的黑科技路由",
        "price":1700
      },
      {
        "id":7,
        "imgUrl":"//p1.ssl.qhimg.com/t01bccedbc0d45dd194.png",
        "title":"360搜索",
        "info":"为家守护的黑科技路由",
        "price":1700
      },
      {
        "id":8,
        "title":"关注更多..."
      }
    ]
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