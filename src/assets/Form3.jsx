import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormContext } from "../FormContext";

const Form3 = () => {
  const { formData, handleFinalSubmit, handleBack } = useContext(FormContext);
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: formData,
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    handleFinalSubmit(data);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h1>Door Access System Biosecurity Breifing</h1>
        <h2>A VISITOR REQUEST MUST BE COMPLETED AND APPROVED PRIOR TO YOUR VISIT</h2>
        <p>All visitors are required to adhere to Door Access System biosecurity procedures. Violations, intentional or
          due to negligence, may require Brenneman Pork to terminate services and/or privileges. Please seek immediate guidance in the event biosecurity restrictions are unclear</p>
          
        {/* <object type="image/svg+xml" data="file1.svg">
          <span className="errorSpan">Your browser does not support SVG!</span>
        </object> */}
        <hr
          style={{
            width: "100%",
            color: "grey",
            border: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        />
        <div className="input-group">
          <label
            htmlFor="bioSecurityBreifing"
            className="documents-checkbox-accept"
          >
            <input
              type="checkbox"
              id="bioSecurityBreifing"
              {...register("bioSecurityBreifing", {
                required:
                  "By clicking here, I state that I have read and understood the terms and conditions..",
              })}
            />
            <span>
              {" "}
              I have read and completely understand the Biosecurity
              Policies/briefing. I agree to adhere to the policies when entering
              Door Access System.
            </span>
          </label>
        </div>
        <p className="error-alert">{errors.bioSecurityBreifing?.message}</p>

        <h2>Signature</h2>
        <div className="signature-div">
          <p>Tap To Sign</p>
        </div>
        <div className="button-group">
          <button onClick={handleBack} className="back-button-50">
            Back
          </button>
          <button type="submit" className="next-button-50">
            Submit
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form3;
