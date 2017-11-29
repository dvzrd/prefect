const validator = require('validator');
const ERRORS = require('../constants').ERRORS;

/**
 * responseValidator - Validate responses and return corresponding errors
 *
 * @param  {Object} request  Koa request body
 * @param  {Array}  fields   Array of fields on the req to validate
 * @return {Object}          The validated/sanitized request body
 */
const responseValidator = function responseValidator(request, fields) {
  const errors = [];
  const props = Object.keys(request);

  for (let i = 0; i < fields.length; i += 1) {
    const isPresent = props.indexOf(fields[i].name) !== -1;
    const isRequired = fields[i].required;

    if (!isPresent && isRequired) {
      switch (fields[i].name) {
        case 'email': errors.push({ error: ERRORS.INVALID_EMAIL }); break;
        case 'name':
          if (!request.name || !request.name.first || !request.name.last) {
            errors.push({ error: ERRORS.INVALID_NAME });
          }
          break;
        case 'password': errors.push({ error: ERRORS.INVALID_PASSWORD }); break;
        case 'passwordConfirm': errors.push({ error: ERRORS.PASSWORD_MUST_MATCH }); break;
        default: errors.push({ error: ERRORS.INVALID_ENTRY }); break;
      }
    } else {
      // Escape and sanitize inputs for security (validator only works on strings)
      if (typeof request[fields[i].name] === 'string') {
        request[fields[i].name] = validator.trim(request[fields[i].name]);
      }

      if (fields[i].name === 'email') {
        if (!validator.isEmail(request.email)) {
          errors.push({ error: ERRORS.INVALID_EMAIL });
        }
      }
      if (fields[i].name === 'password') {
        if (request.password && request.password.length < 8) {
          errors.push({ error: ERRORS.PASSWORD_TOO_SHORT });
        }
      }
      if (fields[i].name === 'passwordConfirm') {
        if (request.passwordConfirm !== request.password) {
          errors.push({ error: ERRORS.PASSWORD_MUST_MATCH });
        }
      }
    }
  }

  // If there are errors, return them, otherwise return the modified request body.
  if (errors && errors.length) {
    return errors;
  }
  return request;
};

/**
 * filterSensitiveData - Filter out sensitive data from a request body
 *
 * @param  {Object} request  Koa request body
 * @return {Object}          Body without sensitive fields
 */
const filterSensitiveData = (request) => {
  const newBody = {};
  const sensitiveKeys = [
    'password',
    'billing',
  ];

  Object.keys(request).forEach((item) => {
    if (sensitiveKeys.indexOf(item) === -1) {
      newBody[item] = request[item];
    }
  });

  return newBody;
};

module.exports = {
  responseValidator,
  filterSensitiveData,
};
