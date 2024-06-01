// Form3.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form3 = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, control, handleBack } = useForm({ defaultValues });

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("field3")} placeholder="Field 3" />

        <button onClick={handleBack}>Back</button>
        <button type="submit" className="next-button-50">Next</button>

      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form3;
