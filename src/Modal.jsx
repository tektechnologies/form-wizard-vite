import React, { useState } from 'react';
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
  field2: '',
  field3: '',
  });

  
  const handleNext = (data) => {
    console.log('handleNext form Data State', formData);
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log('handleFinalSubmit', data);
    setFormData({ ...formData, ...data });
    // handle final submission
    console.log("Final Data:", { ...formData, ...data });
  };

  console.log('state : ',formData);
  return (
    <div className="modal">
     {/* updating state incase user back clicks  */}
      {step === 1 && <Form1 onSubmit={handleNext} defaultValues={formData} />}
      {step === 2 && (
        <div>
        {/* updating state incase user back clicks  */}
          <Form2 onSubmit={handleNext} defaultValues={formData} />
          <button onClick={handleBack}>Back</button>
        </div>
      )}
      {step === 3 && (
        <div>
        {/* manages submitting all data in state on final submit  */}
          <Form3 onSubmit={handleFinalSubmit} defaultValues={formData} />
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Modal;