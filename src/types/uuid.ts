import * as yup from 'yup';

import isString from 'lodash/isString';
import isUUID from 'validator/lib/isUUID';

const uuid = () =>
  yup.string().test({
    name: 'is-uuid',
    message: 'yup:string.uuid',
    test(v) {
      return v == null || (isString(v) && isUUID(v));
    },
  });

export default uuid;
