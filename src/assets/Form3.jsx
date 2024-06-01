// Form3.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form3 = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("field3")} placeholder="Field 3" />
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form3;
