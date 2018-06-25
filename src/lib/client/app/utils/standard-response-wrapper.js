/*
 * Standard response format (for 2XX status code only for now):
 *
 * ```
 * {
 *   result: {
 *     meta: { name: "BATCH_OPERATION" },
 *     data: [
 *       {
 *         success: true,
 *         detail: { // should be the database result
 *           _id: "001",
 *           email: "test1@test.com"
 *         }
 *       },
 *       {
 *         success: false,
 *         status: "ERROR_NAME_1", // required for failed one
 *         detail: { // should be a standard error wrapper
 *           context: {...}
 *           errors: [...]
 *         }
 *       }
 *     ]
 *   }
 * }
 * ```
 */

import StandardErrorWrapper from './standard-error-wrapper';

const responseContext = Symbol('response-context');

class StandardResponseWrapper {
  constructor(initialData, name) {
    this[responseContext] = {};

    if (Array.isArray(initialData)) {
      this[responseContext].data = initialData;
    } else if (initialData) {
      this[responseContext].data = [initialData];
    } else {
      this[responseContext].data = [];
    }

    this[responseContext].name = name;
  }

  append(newData) {
    this[responseContext].data.push(newData);
  }

  getNthData(nth) {
    return this[responseContext].data[nth];
  }

  get name() {
    return this[responseContext].name;
  }

  get data() {
    return this[responseContext].data;
  }

  get format() {
    return {
      result: {
        meta: { name: this[responseContext].name },
        data: this[responseContext].data,
      },
    };
  }

  static deserialize(successPayloadObj) {
    if (!StandardResponseWrapper.verifyFormat(successPayloadObj)) {
      const err = new StandardErrorWrapper([
        {
          code: 1001,
          name: 'RESPONSE_OBJ_PARSE_ERROR',
          source: 'society-risk-analysis',
          message:
            'The response object is not able to deserialize back to an instance of Standard Response Wrapper.',
        },
      ]);

      throw err;
    }

    const data = successPayloadObj.result && successPayloadObj.result.data;
    const name =
      successPayloadObj.result &&
      successPayloadObj.result.meta &&
      successPayloadObj.result.meta.name;

    return new StandardResponseWrapper(data, name);
  }

  static verifyFormat(obj) {
    const data = obj.result && obj.result.data;

    return !!Array.isArray(data);
  }
}

export { StandardResponseWrapper as default };
