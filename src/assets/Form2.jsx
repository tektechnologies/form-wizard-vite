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
      <div className="lay-container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h1>Door Access System Animal Welfare Policy</h1>
         
          <p className="document-para"><span className="bold-text-span">Door Access System </span> has a zero-tolerance policy towards the mistreatment of animals either through abuse
            or neglect. Any employee, or contractor, who mistreats an animal is subject to disciplinary action up to and
            including immediate termination.</p>
          <p className="document-para section-width-paragraphs">Each person has an ethical responsibility to provide the highest level of pig care. The mistreatment of an
            animal is defined, but not limited to:</p>
           
            <div className="numbered-section-margin">
          <div className="container">
            <span className="ellipse">1</span>
            <p className="document-para form-2-list-items">Physical or verbal abuse, violence, or acts of aggression towards animals. This includes, the malicious use of any object or substance to cause unnecessary pain and suffering</p></div>
          <div className="container">
            <span className="ellipse">2</span>
            <p className="document-para form-2-list-items">Failure to manage ventilation and environment to prevent animal exposure to temperature extremes and poor air quality</p></div>
          <div className="container">
            <span className="ellipse">3</span>
            <p className="document-para form-2-list-items">Failure to move animals as outlined in Pork Quality Assurance Plus (PQA+) and/or Transport
              Quality Assurance (TQA) resulting in increased stress on the animal</p></div>
          <div className="container">
            <span className="ellipse">4</span>
            <p className="document-para form-2-list-items">Failure to identify and treat sick pigs. This includes failure to relocate a sick or non-competitive pig to a more suitable location.</p></div>
          <div className="container">
            <span className="ellipse">5</span>
            <p className="document-para form-2-list-items">Failure to comply with the BP treatment & vaccination guidelines as provided by the Veterinary
              Client Patient
              Relationship (VCPR). This includes failure to maintain accurate treatment records.</p></div>
          <div className="container">
            <span className="ellipse">6</span>
            <p className="document-para form-2-list-items">Failure to perform timely euthanasia as outline in the BP Euthanasia Action Plan. This includes,
              timely and correct
              disposal of mortalities</p></div>
          <div className="container">
            <span className="ellipse last-span-item">7</span>
            <p className="document-para form-2-list-items">Failure to treat postmortem animals with respect.</p>
          </div>
          </div>
          <br />
<div className="section-width-paragraphs">
          <p className="document-para">Correct animal care is covered, in detail, in National Pork Board's Pork Quality Assurance Plus (PQA+) and
            Transport Quality Assurance (TQA) programs. These programs are considered industry standards and
            included in both the PQA+ Site Assessment and Common Swine Industry Audit.</p>
          
          <p className="document-para">Under no circumstances will animal abuse or neglect be tolerated. Any individual who witnesses the
            mistreatment of animals by another individual is required to report the incident to BP management during that
            current working day or by calling the Door Access System, toll-free, number 1-844-656-3905 within
            24 hours. Failure to report animal abuse or neglect will result in disciplinary action up to and including immediate termination or loss of contract privileges.</p>

          <p className="document-para">Door Access System recognizes possible criminal implications of non-compliance with this policy and reserves
            the right to assist law enforcement in any criminal investigation against any employee, contractor, visitor,
            current or former, as it relates to accusations of animal abuse or neglect. </p>
            </div>










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
      </div>
      <DevTool control={control} />
    </>
  );
};

export default Form2;
