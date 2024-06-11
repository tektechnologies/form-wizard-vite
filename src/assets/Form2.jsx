// Form2.js
import React, { useContext } from "react";
import { FormContext } from "../FormContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = () => {
  const { formData, handleNext, handleBack } = useContext(FormContext);
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: formData,
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    handleNext(data);
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h2>Door Access System Animal Welfare Policy</h2>
        <object type="image/svg+xml" data="file.svg">
          <span className="errorSpan">Your browser does not support SVG!</span>
        </object>
        <hr
          style={{
            width: "100%",
            color: "grey",
            border: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        />
        <div className="input-group">
          <label
            htmlFor="animalWelfareInput"
            className="documents-checkbox-accept documents-checkbox-margin"
          >
            <input
              type="checkbox"
              id="animalWelfareInput"
              {...register("animalWelfareInput", {
                required:
                  "By clicking here, I state that I have read and understood the terms and conditions..",
              })}
            />
            <span>
              I certify, by signing the above statement, that if at any time
              during my visit I witness signs of animal abuse of neglect I will
              report the incident immediately to Door Access System or via the
              Door Access System Animal Welfare Hotline. If I have any questions
              regarding this information or something I saw, I will speak to a
              member of Door Access System within 24 hours.
            </span>
          </label>
        </div>
        <p className="error-alert">{errors.animalWelfareInput?.message}</p>
        <h2>Signature</h2>
        <div className="signature-div">
          <p>Tap To Sign</p>
        </div>
        <div className="button-group">
          <button onClick={handleBack} className="back-button-50">
            Back
          </button>
          <button type="submit" className="next-button-50">
            Next
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form2;
