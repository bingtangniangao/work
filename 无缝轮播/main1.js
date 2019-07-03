
let n
初始化()
setInterval(() => {
  makeLeave(getImage(n))
    .one('transitionend', (e) => {
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n + 1))
  n += 1
}, 3000)