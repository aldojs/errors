
/**
 * HTTP errors factory
 * 
 * @param code status code
 * @param message error message
 * @param properties additional attributes
 * @throws {TypeError} if the status code is not a number, or not between 400 and 999
 */
export function createError(code?: number, message?: string, properties?: object): HttpError;

export class HttpError extends Error {
  status: number;
  expose: boolean;
  statusCode: number;
  // statusMessage: string;
  headers?: { [x: string]: any; };

  [x: string]: any;
}

export class BadRequest extends HttpError {/* */}
export class Unauthorized extends HttpError {/* */}
export class PaymentRequired extends HttpError {/* */}
export class Forbidden extends HttpError {/* */}
export class NotFound extends HttpError {/* */}
export class MethodNotAllowed extends HttpError {/* */}
export class NotAcceptable extends HttpError {/* */}
export class ProxyAuthenticationRequired extends HttpError {/* */}
export class RequestTimeout extends HttpError {/* */}
export class Conflict extends HttpError {/* */}
export class Gone extends HttpError {/* */}
export class LengthRequired extends HttpError {/* */}
export class PreconditionFailed extends HttpError {/* */}
export class PayloadTooLarge extends HttpError {/* */}
export class URITooLong extends HttpError {/* */}
export class UnsupportedMediaType extends HttpError {/* */}
export class RangeNotSatisfiable extends HttpError {/* */}
export class ExpectationFailed extends HttpError {/* */}
export class ImATeapot extends HttpError {/* */}
export class MisdirectedRequest extends HttpError {/* */}
export class UnprocessableEntity extends HttpError {/* */}
export class Locked extends HttpError {/* */}
export class FailedDependency extends HttpError {/* */}
export class UnorderedCollection extends HttpError {/* */}
export class UpgradeRequired extends HttpError {/* */}
export class PreconditionRequired extends HttpError {/* */}
export class TooManyRequests extends HttpError {/* */}
export class RequestHeaderFieldsTooLarge extends HttpError {/* */}
export class UnavailableForLegalReasons extends HttpError {/* */}
export class InternalServerError extends HttpError {/* */}
export class NotImplemented extends HttpError {/* */}
export class BadGateway extends HttpError {/* */}
export class ServiceUnavailable extends HttpError {/* */}
export class GatewayTimeout extends HttpError {/* */}
export class HTTPVersionNotSupported extends HttpError {/* */}
export class VariantAlsoNegotiates extends HttpError {/* */}
export class InsufficientStorage extends HttpError {/* */}
export class LoopDetected extends HttpError {/* */}
export class BandwidthLimitExceeded extends HttpError {/* */}
export class NotExtended extends HttpError {/* */}
export class NetworkAuthenticationRequired extends HttpError {/* */}
