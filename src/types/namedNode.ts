import * as yup from 'yup';

import uuid from './uuid';

const namedNode = () =>
  yup.object({
    id: uuid().defined().nullable(false),
    name: yup.string(),
  });

export default namedNode;
