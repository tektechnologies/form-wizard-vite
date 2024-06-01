// Form2.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("field2")} placeholder="Field 2" />
        <button type="submit">Next</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form2;
