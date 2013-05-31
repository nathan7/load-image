var Promise = require('promise')
  , isPromise = require('is-promise')
  , lazify = require('lazify')
  , Image = this.Image || require('canvas').Image

module.exports = exports =
function loadImage(src) {
  if (isPromise(src)) return src.then(loadImage)
  return new Promise(function(resolve, reject) {
    var img = new Image()
    img.onload = function() { resolve(img) }
    img.onerror = reject
    img.src = src
  })
}

exports.lazily = function loadImageLazily(src) {
  return lazify(function() { return loadImage(src) })
}
