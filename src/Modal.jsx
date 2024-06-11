import React, { useContext, memo } from 'react';
import { FormProvider, FormContext } from './FormContext';
import Form1 from './assets/Form1';
import Form2 from './assets/Form2';
import Form3 from './assets/Form3';

const Modal = memo(() => {
  const { step } = useContext(FormContext);

  return (
    <div className='modal'>
      {step === 1 && <Form1 />}
      {step === 2 && <Form2 />}
      {step === 3 && <Form3 />}
    </div>
  );
});

export default () => (
  <FormProvider>
    <Modal />
  </FormProvider>
);