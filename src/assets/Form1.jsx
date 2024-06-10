// Form1.jsx
import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import { FormContext } from "../FormContext";


// console.log(FormContext)


// const Form1 = ({ onSubmit, defaultValues }) => {
  const Form1 = () => {

const { handleNext, formData  } = useContext(FormContext);
console.log('form data: ?',formData);
  // const { register, handleSubmit, control, formState, watch, clearErrors } = useForm({ defaultValues });
  const { register, handleSubmit, control, formState, watch, clearErrors } = useForm({defaultValues: formData});

  const { errors } = formState;
  // const istoolsRequired = watch('toolsRequired', defaultValues.toolsRequired);
  const istoolsRequired = watch('toolsRequired', formData.toolsRequired);

  const handleToolsRequiredChange = (event) => {
    console.log('tool reason error: ', event.target.checked);
    if (!event.target.checked) {
      clearErrors('toolReason');
    }
  }

  const onSubmit = (data) => {
    handleNext(data);
  }

  return (
    <>
      <div className="lay-container">
        <div className="form-container">
          <h2>Personal Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="label-input-group three-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "User name is required.",
                })}
              />
              <p>{errors.firstName?.message}</p>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: "Last name is required." })}
              />
              <p>{errors.lastName?.message}</p>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="companyName">Company</label>
              <input
                type="text"
                id="companyName"
                {...register("companyName", {
                  required: "Company name is required.",
                })}
              />
              <p>{errors.companyName?.message}</p>
            </div>
            <div className="label-input-group">
              <label htmlFor="emailAddress">Email</label>
              <input
                type="text"
                id="emailAddress"
                {...register("emailAddress", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Email",
                  },
                  required: "Email is required.",
                })}
              />
              <p>{errors.emailAddress?.message}</p>
            </div>
            <div className="label-input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^\d{3}-?\d{3}-?\d{4}$/, // Adjust the regex according to your needs
                    message: "Invalid phone number format",
                  },
                })}
              />
              <p>{errors.phoneNumber?.message}</p>
            </div>
            <label htmlFor="visitForeignCountry" className="toggle">
              Have you visited a foreign country in the last 7 days?
              <input
                type="checkbox"
                id="visitForeignCountry"
                {...register("visitForeignCountry")}
              />
              <span className="slider position-toggle"></span>
            </label>
            <hr
              style={{
                width: "100%",
                color: "grey",
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }}
            />
            <div className="label-textarea-group">
              <h2>Visit Reason</h2>
              <label htmlFor="visitReason">Reason for Visit</label>
              <textarea
                htmlFor="visitReason"
                id="visitReason"
                rows="4"
                {...register("visitReason", {
                  required: "Visit Reason is required.",
                })}
              ></textarea>
              {
                <p>{errors.visitReason?.message}</p>
              }
            </div>
            <hr
              style={{
                width: "100%",
                color: "grey",
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }}
            />
            <div className="label-input-group">
              <h2>Tools Details</h2>
              <div className="label-margin-bottom">
                <label htmlFor="toolsRequired" className="toggle">
                  Tools Required
                  <input
                    type="checkbox"
                    id="toolsRequired"
                    {...register("toolsRequired", {
                      onChange: handleToolsRequiredChange
                    })}
                  />
                  <span className="slider position-toggle"></span>
                </label>
              </div>
            </div>
            <div className="label-textarea-group">
              <label htmlFor="toolsReason">Reason for Tools</label>
              <textarea
                htmlFor="toolsReason"
                id="toolsReason"
                rows="4"
                {...register("toolReason", {
                  validate: value => istoolsRequired ? value !== "" || "Tool reason is required." : true,
                })}
              ></textarea>
              {errors.toolReason?.message && (
                <p>{errors.toolReason.message}</p>
              )}
            </div>
            <hr
              style={{
                width: "100%",
                color: "grey",
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }}
            />
            <div className="h2-blocklevel">
              <h2>Visit Details</h2>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="visitDate">Visit Date</label>
              <input
                type="date"
                id="visitDate"
                {...register("visitDate", {
                  required: "Visit Date is required.",
                })}
                min={new Date().toISOString().split("T")[0]} // Set min attribute to today's date
              />
              <p>{errors.visitDate?.message}</p>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="startTime">Start Time</label>
              <input
                type="time"
                id="startTime"
                {...register("startTime", {
                  required: "Start time is required.",
                })}
              />
              <p>{errors.startTime?.message}</p>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="endTime">End Time</label>
              <input
                type="time"
                id="endTime"
                {...register("endTime", { required: "End time is required." })}
              />
              <p>{errors.endTime?.message}</p>
            </div>
            <div className="label-input-group">
              <label htmlFor="userLocation">Your Location</label>
              <select
                id="userLocation"
                defaultValue={"DEFAULT"}
                {...register("userLocation", {
                  required: "Location is required.",
                })}
              >
                <option value="">-- Choose a Location --</option>
                <option value="barn-one">Barn 1</option>
                <option value="barn-two">Barn 2</option>
                <option value="barn-three">Barn 3</option>
                <option value="barn-four">Barn 4</option>
              </select>
              <p>{errors.userLocation?.message}</p>
            </div>
            <div className="label-input-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                defaultValue={"DEFAULT"}
                {...register("productcategory", {
                  required: "Category is required.",
                })}
              >
                <option value="">-- Choose an Option --</option>
                <option value="visitor">Vistor</option>
                <option value="farmer">Farmer</option>
                <option value="usda">USDA Rep</option>
                <option value="porkypigg">Porky Pig</option>
              </select>
              <p>{errors.productcategory?.message}</p>
            </div>
            <hr
              style={{
                width: "100%",
                color: "grey",
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }}
            />
            <FontAwesomeIcon
              icon={faCircleExclamation}
              style={{ height: "25px", color: "#E75B29" }}
            />
            <h2 className="color-alert">ELECTRONIC DEVICES</h2>
            <p className="para-styles">
              No cell phones, cameras, audio or visual equipment, or any other
              electronic devices are permitted on the premises without written
              approval by Door Access System. By signing this statement, you
              declare that you have no electronic devices including those
              mentioned above on your person, and you have no intention of
              bringing such devices onto the premises without prior written
              approval
            </p>
            <h2>Signature</h2>
            <div className="signature-div">
              <p>Tap To Sign</p>
            </div>
            <button className="next-button">Next</button>
          </form>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default Form1;
