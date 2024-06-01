// Form3.js
import React from 'react';
import { useForm } from 'react-hook-form';

const Form3 = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('field3')} placeholder="Field 3" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form3;