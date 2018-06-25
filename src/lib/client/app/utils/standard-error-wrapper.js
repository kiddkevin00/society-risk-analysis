/*
 * Standard error format:
 *
 *  ```
 *  {
 *    context: {
 *      containerId: "a123",
 *      requestCount: 0
 *    },
 *    errors: [
 *      {
 *        code: 404,
 *        name: "SOMETHING_NOT_FOUND",
 *        source: "another-app",
 *        message: "Something is not found.",
 *        detail: `err` // optional
 *      },
 *      {
 *        code: 500,
 *        name: "SOMETHING_WENT_WRONG",
 *        source: "current-app",
 *        message: "Something went wrong.",
 *        detail: `err` // optional
 *      }
 *    ]
 *  }
 *  ```
 */

// [TODO] When throwing an object with `Symbol('error-context')` property, it will become `{}`.
const errorContext = 'error-context';

class StandardErrorWrapper extends Error {
  constructor(initialErr) {
    super();

    this[errorContext] = {};

    if (initialErr instanceof StandardErrorWrapper) {
      this[errorContext].errorStack = initialErr[errorContext].errorStack;
    } else if (Array.isArray(initialErr)) {
      /*
       * If the initial error(s) are wrapped into an array, each of them should follow standard
       * error format.
       */
      this[errorContext].errorStack = initialErr;
    } else if (initialErr) {
      // If the initial error doesn't follow standard error format, will attempt to standardized it.
      const errMsg =
        initialErr.toString() !== '[object Object]'
          ? initialErr.toString()
          : JSON.stringify(initialErr, null, 2);

      this[errorContext].errorStack = [
        {
          code: 1000,
          name: 'UNKNOWN_ERROR',
          source: 'society-risk-analysis',
          message: errMsg,
          detail: initialErr,
        },
      ];
    } else {
      // If there is no initial error provided, default to an empty array.
      this[errorContext].errorStack = [];
    }
  }

  append = newError => {
    let errElement;

    if (newError.toString() !== '[object Object]') {
      errElement = { message: newError.toString(), detail: newError };
    } else {
      // If new error is an object, it should follow standard error format.
      errElement = newError;
    }

    this[errorContext].errorStack.push(errElement);
  };

  getNthError = nth => this[errorContext].errorStack[nth];

  format = (context = {}) => ({
    context,
    errors: this[errorContext].errorStack,
  });

  static deserialize(errorPayloadObj) {
    if (!StandardErrorWrapper.verifyFormat(errorPayloadObj)) {
      const err = new StandardErrorWrapper([
        {
          code: 1002,
          name: 'ERROR_OBJ_PARSE_ERROR',
          source: 'society-risk-analysis',
          message:
            'The error object is not able to deserialize back to an instance of Standard Error Wrapper.',
        },
      ]);

      throw err;
    }

    const errors = errorPayloadObj.errors;

    return new StandardErrorWrapper(errors);
  }

  static verifyFormat(obj) {
    const errors = obj.errors;

    return !!Array.isArray(errors);
  }
}

export { StandardErrorWrapper as default };
