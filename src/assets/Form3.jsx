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
        <div className="lay-container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <h1>Door Access System Biosecurity Breifing</h1>
            <div className="container">
              <span className="ellipse">1</span>
              <h2>A VISITOR REQUEST MUST BE COMPLETED AND APPROVED PRIOR TO YOUR VISIT</h2>
            </div>
            <p className="document-para">All visitors are required to adhere to Door Access System biosecurity procedures. Violations, intentional or due to negligence, may require Brenneman Pork to terminate services and/or privileges. Please seek immediate guidance in the event biosecurity restrictions are unclear.</p>
            <div className="container">
              <span className="ellipse">2</span>
              <h2>DOWNTIME REQUIREMENTS</h2>
            </div>
            <p className="document-para">
              Door Access System observes different downtimes based on exposure to different health status' and phases of
              production both inside and outside the Door Access System. BP Management will assist in determining
              an appropriate work or visit schedule. Please note international travel downtime is a minimum of 7-days.
            </p>
            <div className="container">
              <span className="ellipse">3</span>
              <h2>ENTRY PROCEDURES</h2>
            </div>
            <p className="document-para">
              <span className="bold-text-span">NURSERIES & SOW FARMS:</span> Remove footwear before stepping over the wall barrier. Use caution not to
              step onto the dirty side with socked/bare feet. Sit on the barrier wall and swing feet over. SHOWER-IN and
              SHOWER-OUT: Contractor must follow all shower in and shower out requirements.
              <br /><br />
              <span className="bold-text-span"> FINISHERS:</span> At the Red/Green line, change into site specific clothing or Tyvek. Put on plastic shoe covers
              or change into site specific boots.
              <br /><br />
              <span className="bold-text-span">FEEDMILL, SHOP, OFFICE, TRUCKWASH:</span> Each location has specific biosecurity requirements depending on the area and reason for visit. Some areas may require a shower in and/or out and/or site specific clothing. As a minimum, placing bootieson shoes <a href="">prior</a> to entering is good practice. Please review site specific biosecurity requirements with BP management prior to your visit.
            </p>
            <div className="container">
              <span className="ellipse">4</span>
              <h2>OUTSIDE ITEMS</h2>
            </div>
            <p className="document-para">
              <span className="bold-text-span">SOW FARMS: </span>All items, including, but not limited to, lunches, beverages, supplies, and tools must be
              approved and enter the farm via designated ultra-violet chamber. Items must be sprayed and/or wiped down
              after ultra-violet light exposure. Jewelry must not enter the farm. Eyeglasses and medically necessary
              jewelry are permitted but must be worn in the shower or passed through the ultra-violet light.
              <br />
              <br />
              <span className="bold-text-span"> NURSERIES & FINISHERS:</span> All items must be sprayed and/or wiped down with disinfectant, prior to entry
              and brought through the designated area, if available
            </p>
            <div className="container">
              <span className="ellipse">5</span>
              <h2>ELECTRONIC & RECORDING DEVICES</h2>
            </div>
            <p className="document-para">
              No cell phones, cameras, audio/visual equipment, or other electronic devices are permitted inside
              Door Access System. If electronic or recording devices are required, approval must be given, in
              writing, <a href="">prior</a> to visit.
            </p>
            <div className="container">
              <span className="ellipse">6</span>
              <h2>TOOLS OR EQUIPMENT</h2>
            </div>
            <p className="document-para">
              Tool and equipment must be approved prior to entry. Tools and equipment must be clean, disinfected, and
              brought using the site-specific protocols
            </p>
            <div className="container">
              <span className="ellipse">7</span>
              <h2 className="orange-text-h2">VISITORS WILL BE ACCOMPANIED BY A MEMBER OF THE Door Access System</h2>
            </div>
            <div className="container">
              <span className="ellipse">8</span>
              <h2 className="orange-text-h2">DOOR ACCESS SYSTEM IS NOT LIABLE FOR ANY STOLEN, MISSING, OR LOST ITEMS. PLEASE LEAVE ALL ITEMS <br />OF VALUE AT HOME, IN SUITCASE, HOTEL ROOM, OR VEHICLE</h2>
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
                  htmlFor="bioSecurityBreifing"
                  className="documents-checkbox-accept form3-checkbox-margin"
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
      </div>
      <DevTool control={control} />
    </>
  );
};

export default Form3;
