import * as cronValidator from 'cron-validator';
import * as yup from 'yup';

import isString from 'lodash/isString';

const cron = () =>
  yup
    .string()
    .defined()
    .test({
      name: 'is-cron',
      message: 'yup:string.cron',
      test(v) {
        return (
          this.schema.isType(v) &&
          (!isString(v) || v === '' || cronValidator.isValidCron(v))
        );
      },
    });

export default cron;
