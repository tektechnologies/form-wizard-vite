// Form2.js
import React from 'react';
import { useForm } from 'react-hook-form';

const Form2 = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('field2')} placeholder="Field 2" />
      <button type="submit">Next</button>
    </form>
  );
};

export default Form2;