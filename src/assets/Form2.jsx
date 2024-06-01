// Form2.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, control, handleBack } = useForm({ defaultValues });
  
  //trying to move the handle back button into the form for layout not sure how to pass the function to the individual components and get the call back to the Modal class to update. 

  console.log('handle back!!!!1', handleBack);
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("field2")} placeholder="Field 2" />

        <button onClick={handleBack}>Back</button>

        <button type="submit" className="next-button-50">Next</button>

      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form2;
