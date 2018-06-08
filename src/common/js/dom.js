export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  // 通过空格拆分成数组
  let newClass = el.className.split(' ')
  // 添加新的class
  newClass.push(className)
  // 拼接成新的
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
