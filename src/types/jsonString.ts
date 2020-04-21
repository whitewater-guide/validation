import * as yup from 'yup';

import isJSON from 'validator/lib/isJSON';
import isString from 'lodash/isString';

const jsonString = () =>
  yup
    .string()
    .defined()
    .test({
      name: 'is-json-string',
      message: 'yup:string.json',
      test(v) {
        return this.schema.isType(v) && (!isString(v) || isJSON(v));
      },
    });

export default jsonString;
