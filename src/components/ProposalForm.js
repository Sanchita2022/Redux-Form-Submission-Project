import React from "react";
import "./ProposalForm.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { connect } from "react-redux";
import {
  setFullName,
  setDob,
  setMobile,
  setEmail,
  setSalutation,
  setAddress,
  setJob,
  setWeight,
  setFeet,
  setInch,
  setCity,
  setPincode,
  setPreExistingDisease
} from "../actions/actions";

const ProposalForm = ({
  address,
  job="default",
  fullName,
  dob,
  mobile,
  email,
  salutation,
  weight,
  feet,
  inch,
  city,
  pincode,
  preExistingDisease=[],
  setAddress,
  setJob,
  setFullName,
  setDob,
  setMobile,
  setEmail,
  setSalutation,
  setWeight,
  setFeet,
  setInch,
  setCity,
  setPincode,
  setPreExistingDisease
}) => {
  // const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  // const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");

  // const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  // const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // const [salutation, setSalutation] = useState("");
  const [salutationError, setSalutationError] = useState("");

  // const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("");

  // const [feet, setFeet] = useState("");
  const [feetError, setFeetError] = useState("");

  // const [inch, setInch] = useState("");
  const [inchError, setInchError] = useState("");

  // const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");

  // const [pincode, setPincode] = useState("");
  const [pincodeError, setPincodeError] = useState("");

  const handleSalutationChange = (event) => {
    const value = event.target.value;

    setSalutation(value);
  };

  const handleSalutationBlur = () => {
    if (!["Mr.", "Ms.", "Mrs."].includes(salutation)) {
      setSalutationError("Only Mr./Mrs./Ms. allowed");
    } else {
      setSalutationError("");
    }
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleFullNameBlur = () => {
    if (!fullName.trim()) {
      setFullNameError("Full Name is required");
    } else if (!/^[A-Za-z ]+$/.test(fullName)) {
      setFullNameError("Only alphabetic characters and spaces are allowed");
    } else {
      setFullNameError("");
    }
  };
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleDobBlur = () => {
    if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dob)) {
      setDobError("Please enter D.O.B. in DD/MM/YYYY format");
    } else {
      setDobError("");
    }
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleMobileBlur = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMobileError("Mobile number must be 10 digits");
    } else {
      setMobileError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;

    setWeight(value);
  };

  const handleWeightBlur = () => {
    if (!/^\d+$/.test(weight)) {
      setWeightError("Please enter a valid weight");
    } else {
      setWeightError("");
    }
  };

  const handleFeetChange = (event) => {
    const value = event.target.value;

    setFeet(value);
  };

  const handleFeetBlur = () => {
    if (!/^\d+$/.test(feet)) {
      setFeetError("Please enter a valid height");
    } else {
      setFeetError("");
    }
  };

  const handleOccupationChange = (event) => {
    console.log(event.target.value)
    setJob(event.target.value);
  };

  const handleInchChange = (event) => {
    const value = event.target.value;

    setInch(value);
  };

  const handleInchBlur = () => {
    if (!/^\d+$/.test(inch)) {
      setInchError("Please enter a valid height");
    } else {
      setInchError("");
    }
  };

  const handleCityChange = (event) => {
    const value = event.target.value;

    setCity(value);
  };

  const handleCityBlur = () => {
    if (!city.trim()) {
      setCityError("City is required");
    } else if (!/^[A-Za-z\s]*$/.test(city)) {
      setCityError("City can only contain letters and spaces");
    } else {
      setCityError("");
    }
  };

  const handlePincodeChange = (event) => {
    const value = event.target.value;

    setPincode(value);
  };

  const handlePincodeBlur = () => {
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeError("Pincode must be 6 digits");
    } else {
      setPincodeError("");
    }
  };

  const handlePreExistingDiseaseChange = (event) => {
    const value = event.target.value;
    const index = preExistingDisease.indexOf(value);
    if (index === -1) {
      setPreExistingDisease([...preExistingDisease, value]);
    } else {
      const updatedDiseases = [...preExistingDisease];
      updatedDiseases.splice(index, 1);
      setPreExistingDisease(updatedDiseases);
    }
  };

  return (
    <div className="proposal-form">
      <h3>Proposal Form (Step 1 of 3)</h3>
      <p>Self (51 Yrs)</p>
      <div className="first-row row">
        <div className="input-card salutation">
          <label>Salutation</label>
          <input
            value={salutation}
            onChange={(event) => {
              handleSalutationChange(event);
            }}
            onBlur={(event) => {
              handleSalutationBlur(event);
            }}
          ></input>
          {salutationError && (
            <span className="error">
              {salutationError}
            </span>
          )}
        </div>

        <div className="fullname input-card">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(event) => {
              handleFullNameChange(event);
            }}
            onBlur={handleFullNameBlur}
          ></input>
          {fullNameError && (
            <span className="error">
              {fullNameError}
            </span>
          )}
        </div>
      </div>
      <div className="second-row row">
        <div className="input-card dob">
          <label>Date of Birth</label>
          <input
            value={dob}
            onChange={(event) => {
              handleDobChange(event);
            }}
            onBlur={(event) => {
              handleDobBlur();
            }}
          ></input>
          {dobError && (
            <span className="error">
              {dobError}
            </span>
          )}
        </div>
        <div className="input-card weight">
          <label>Weight (in kgs)</label>
          <input
            value={weight}
            onChange={handleWeightChange}
            onBlur={handleWeightBlur}
          ></input>
          {weightError && (
            <span className="error">
              {weightError}
            </span>
          )}
        </div>
        <div className="input-card height-feet">
          <label>Height in feet</label>
          <input
            value={feet}
            onChange={handleFeetChange}
            onBlur={handleFeetBlur}
          ></input>
          {feetError && (
            <span className="error">
              {feetError}
            </span>
          )}
        </div>
        <div className="input-card height-inch">
          <label>Height in inch</label>
          <input
            value={inch}
            onChange={handleInchChange}
            onBlur={handleInchBlur}
          ></input>
          {inchError && (
            <span className="error">
              {inchError}
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="thirdrow row">
          <label>Occupation</label>
          <select
            name="jobInput"
            value={job}
            onChange={handleOccupationChange}
          >
          <option value="default" >Select value</option>
            <option value="Salaried">Salaried</option>
            <option value="Student">Student</option>
            <option value="Freelancer">Freelancer</option>
          </select>
        </div>
      </div>
      <h3 style={{ fontWeight: "400" }}>Communication Details</h3>
      <div className="fourth-row row">
        <div className="input-card mobile">
          <label>Mobile</label>
          <input
            value={mobile}
            onChange={handleMobileChange}
            onBlur={handleMobileBlur}
          ></input>
          {mobileError && (
            <span className="error">
              {mobileError}
            </span>
          )}
        </div>
        <div className="input-card email">
          <label>Email Id</label>
          <input
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          ></input>
          {emailError && (
            <span className="error">
              {emailError}
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="fifth-row">
          <label>Address</label>
          <input
            value={address}
            onChange={handleAddressChange}
          ></input>
        </div>
      </div>
      <div className="sixth-row row">
        <div className="input-card city">
          <label>City</label>
          <input
            value={city}
            onChange={handleCityChange}
            onBlur={handleCityBlur}
          ></input>
          {cityError && (
            <span className="error">
              {cityError}
            </span>
          )}
        </div>
        <div className="input-card pincode">
          <label>Pincode</label>
          <input
            value={pincode}
            onChange={handlePincodeChange}
            onBlur={handlePincodeBlur}
          ></input>
          {pincodeError && (
            <span className="error">
              {pincodeError}
            </span>
          )}
        </div>
      </div>

      <h3 style={{ fontWeight: "400" }}>Medical Details</h3>
      <div className="bottom-box">
        <p>
          Q. Does any person(s) to be insured has any Pre-existing disease ?
        </p>
        <FormGroup>
          {/* <FormLabel>Q. Does any person(s) to be insured has any Pre-existing disease ?</FormLabel> */}
          <FormControlLabel
            control={<Checkbox  
                onChange={handlePreExistingDiseaseChange}
                value="None" />}
            label="None of the family members"
           
          />
          <FormControlLabel control={<Checkbox    
                onChange={handlePreExistingDiseaseChange}
                value="Diabetes"/>} label="Diabetes" />
          <FormControlLabel
            control={<Checkbox  
                onChange={handlePreExistingDiseaseChange}
                value="Congenital Disorder" />}
            label="Congenital Disorder"
          />
          <FormControlLabel control={<Checkbox 
                onChange={handlePreExistingDiseaseChange}
                value='Liver Disease' />} label="Liver Disease" />
        </FormGroup>
      </div>
      <div className="bottom-box">
        <p>
          Q. Has any of the Proposed to be insured consulted/taken treatment or
          recomended to take investigations/medication/surgery other than for
          childbirth/minor injuries ?
        </p>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="None of the family members"
          />
        </FormGroup>
      </div>
      <div className="bottom-box">
        <p>
          Q. Has any of the Proposed to be insured consulted/taken treatment or
          recomended to take investigations/medication/surgery other than for
          childbirth/minor injuries ?
        </p>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="None of the family members"
          />
        </FormGroup>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fullName: state.fullName,
  dob: state.dob,
  mobile: state.mobile,
  email: state.email,
  salutation: state.salutation,
  weight: state.weight,
  feet: state.feet,
  inch: state.inch,
  city: state.city,
  pincode: state.pincode,
  job: state.job,
  preExistingDisease: state.preExistingDisease,
});

const mapDispatchToProps = {
  setAddress,
  setJob,
  setFullName,
  setDob,
  setMobile,
  setEmail,
  setSalutation,
  setWeight,
  setFeet,
  setInch,
  setCity,
  setPincode,
  setPreExistingDisease
};

// giving state variables back to this component
export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm);
// export default ProposalForm;
