import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { saveUserName } from '../../store/actions/user';
import * as constants from '../../constants';
import Registration from './Registration';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    step: 1,
    [constants.FIELD_NAME]: '',
    [constants.FIELD_TERM1]: false
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: Yup.string()
      .trim()
      .min(3, 'name_form_text7')
      .max(20, 'name_form_text8')
      .matches(/^[a-zA-Z0-9wąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/, 'name_form_text9')
  });

  const handleSubmit = form => {
    const data = {
      name: form[constants.FIELD_NAME]
    };

    dispatch(saveUserName(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <Registration />
    </Formik>
  );
};

export default RegistrationContainer;
