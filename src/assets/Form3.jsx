// Form3.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form3 = ({ onSubmit, defaultValues, handleBack }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("field3")} placeholder="Field 3" />

        <div>
        <button onClick={handleBack} className="back-button-50">Back</button>

        <button type="submit" className="next-button-50">Submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form3;
