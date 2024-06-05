// Form2.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = ({ onSubmit, defaultValues, handleBack }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });
 

  // console.log('handle back!!!!1', handleBack);
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <object type="image/svg+xml" data=".svg" >
				<span class="errorSpan" >Your browser does not support SVG!</span>
			</object>





        <input {...register("field2")} placeholder="Field 2" />
      <div className="button-group">
        <button onClick={handleBack} className="back-button-50">Back</button>
        <button type="submit" className="next-button-50">Next</button>
      </div>
        

      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form2;
