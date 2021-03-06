import * as yup from 'yup';

import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import isUUID from 'validator/lib/isUUID';

const NEW_ID = '__NEW_ID__';

const newNode = () =>
  yup.mixed().test({
    name: 'is-new-node',
    message: 'yup:mixed.newNode',
    test(v: any) {
      if (!v || !isObject(v)) {
        return false;
      }
      const { id, name } = v as any;
      if (!id || !isString(id)) {
        return false;
      }
      if (id === NEW_ID) {
        return !!name && isString(name) && name.length > 0;
      }
      return isUUID(id);
    },
  });

export default newNode;
