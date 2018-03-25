
'use strict'

class HttpError extends Error {
  // 
}

Reflect.defineProperty(HttpError.prototype, 'name', {
  configurable: true,
  value: 'HttpError',
  writable: true,
})

// export
module.exports = HttpError
