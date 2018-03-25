
'use strict'

var BaseError = require('./base')
var statuses = require('./statuses.json')

// map of standard errors
var map = {}

// 
for (let code in statuses) {
  var message = statuses[code]
  var name = message.replace(/[^a-z]/gi, '')
  var Err = _createErrorCtor(parseInt(code), message, name)

  // export
  exports[name] = Err
}

// export base HTTP error
exports.HttpError = BaseError

/**
 * Create an HTTP error
 * 
 * @param {Number} [code]
 * @param {String} [message]
 * @param {Object} [properties]
 * @returns {HttpError}
 * @throws {TypeError} if the status code is not a number, or not between 400 and 999
 */
exports.createError = function createError (code = 500, message = '', properties = {}) {
  var err

  if (typeof code !== 'number' || code < 400 || code > 999) {
    throw new TypeError('Invalid status code. Use a number between 400 and 999')
  }

  if (map[code]) err = new map[code](message)
  else {
    err = new BaseError(message || statuses[code] || '')

    // err.statusMessage = statuses[code] || ''
    err.status = err.statusCode = code
    err.expose = code < 500
  }

  // capture a stack trace to the invocation point
  Error.captureStackTrace(err, createError)

  // additional properties
  for (let field in properties) {
    err[field] = properties[field]
  }

  return err
}

/**
 * Create an error constructor
 * 
 * @param {Number} code
 * @param {String} message
 * @param {String} name
 * @returns {Error}
 * @private
 */
function _createErrorCtor (code, message, name) {
  var HttpError = class extends BaseError {
    constructor (msg) {
      super(msg || message)
    }
  }

  if (!name.endsWith('Error')) name = `${name}Error`

  // _define(HttpError.prototype, 'statusMessage', message)
  _define(HttpError.prototype, 'expose', code < 500)
  _define(HttpError.prototype, 'statusCode', code)
  _define(HttpError.prototype, 'status', code)
  _define(HttpError.prototype, 'name', name)

  // add to the map
  map[code] = HttpError

  return HttpError
}

/**
 * `Reflect.defineProperty` shortcut
 * 
 * @param {Object} object
 * @param {String} prop
 * @param {Any} value
 * @private
 */
function _define (object, prop, value) {
  Reflect.defineProperty(object, prop, {
    configurable: true,
    writable: true,
    value
  })
}
