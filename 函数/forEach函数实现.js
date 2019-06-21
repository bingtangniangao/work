function forEach(array, fu) {
  for (let i = 0; i < array.length; i++) {
    fu(array[i], i)
  }
}
forEach([1, 2, 3], function (value, key) {
  console.log(value)
  console.log(key)
})
