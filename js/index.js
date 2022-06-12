let musicRender = (function () {
  let $headerBox = $('.header-box')
  let $contentBox = $('.content-box')
  let $footerBox = $('.footer-box')
  let musicaudio = $('#musicaudio')[0]
  let $play = $('.play-btn')
  
  let computedContent = function () {
    let winH = document.documentElement.clientHeight,
      font = parseFloat(document.documentElement.style.fontSize)
    $contentBox.css({
      height: (winH - $headerBox[0].offsetHeight - $footerBox[0].offsetHeight - 1.2 * font)
    })
  }

  let queryLyric = function queryLyric() {
    return new Promise(resolve => {
      $.ajax({
        url: 'json/lyric.json',
        dataType: 'json',
        async: true,
        success: (res) => {
          resolve({
            "list" : [
              "[00:00.00]美人鱼 - 周子鹏",
              "[00:00.69]只要你在我身边",
              "[00:02.47]所有蜚语流言完全视而不见",
              "[00:05.60]请不要匆匆一面一转身就沉入海平线",
              "[00:12.84]传说中你为爱甘心被搁浅",
              "[00:17.64]"
            ],
            ...{res}
          })
        }
      })
    })
  }

  let playRun = function playRun(){
    musicaudio.play()
  }

  $play.on('click',playRun)

  return {
    init: function () {
      computedContent()
     
    }
  }
})()
musicRender.init()