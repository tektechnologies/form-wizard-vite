import React, { useState, useEffect } from 'react';
import Form1 from './assets/Form1';
import Form2 from './assets/Form2';
import Form3 from './assets/Form3';

const Modal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
  firstName : '',
  lastName :  '',
  companyName :  '',
  emailAddress : '',
  phoneNumber :  '',
  visitForeignCountry :  '',
  visitReason :  '',
  toolsRequired : '',
  toolReason :  '',
  visitDate :  '',
  startTime :  '',
  endTime :  '',
  userLocation :  '',
  productcategory :  '',
  //second form 
  field2: '',
  //third form
  field3: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);
  
  const handleNext = (data) => {
    console.log('handleNext data ', data);
  // https://typeofnan.dev/fix-the-maximum-update-depth-exceeded-error-in-react/
  const handleNext = ((data) => {
      console.log('clickin : ',data);

    setFormData(prevFormData => ({ ...prevFormData, ...data }));
    
    setStep(step + 1);
});

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log('handle Final Submit:FINAL', data);
    setFormData(prevFormData => ({ ...prevFormData, ...data }));
    // handle final submission
    // console.log("Final Data:", { ...formData, ...data });
    
  };

  // console.log('state : ',formData);
  return (
    <div className="modal">
     {/* updating state incase user back clicks  */}
      {step === 1 && <Form1 onSubmit={handleNext}  defaultValues={formData} />}
      {step === 2 && (
        <div>
        {/* updating state incase user back clicks  */}
          <Form2 onSubmit={handleNext} defaultValues={formData} handleBack={handleBack} />
          {/* <button onClick={handleBack}>Back</button> */}
        </div>
      )}
      {step === 3 && (
        <div>
        {/* manages submitting all data in state on final submit  */}
          <Form3 onSubmit={handleFinalSubmit} defaultValues={formData} handleBack={handleBack} />
          {/* <button onClick={handleBack}>Back</button> */}
        </div>
      )}
    </div>
  );
};

export default Modal;
