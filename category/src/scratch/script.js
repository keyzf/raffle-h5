(() => {
  // 入口函数
  let operate = {
    options: {
      dataUrl: '../common/json/detail.json'
    },
    init: () => {
      operate.ajaxInfo()
    },
    ajaxInfo: () => {
      window.utils.http({
				url: operate.options.dataUrl,
				success: function (json) {
          if (json) {
            $('.page-scratchit').scratch({
              data: json
            })
          } else {
            console.warn('抽奖信息错误')
          }
				},
        error: function (err) {
          console.warn('抽奖信息错误')
        }
			})
    }
  }
  operate.init()
})()
