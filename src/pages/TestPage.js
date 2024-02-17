import React from "react";
import "./TestPage.css";

import { connect } from "react-redux";

const TestPage = ({
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
  job,
  address,
  preExistingDisease=[]
}) => {
  return (
    <div className="test-page">
      <h2>Test Page</h2>
      <div>
        <strong>Full Name:</strong> {fullName}
      </div>
      <div>
        <strong>Date of Birth:</strong> {dob}
      </div>
      <div>
        <strong>Mobile:</strong> {mobile}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Salutation:</strong> {salutation}
      </div>
      <div>
        <strong>Weight:</strong> {weight}
      </div>
      <div>
        <strong>Feet:</strong> {feet}
      </div>
      <div>
        <strong>Inch:</strong> {inch}
      </div>
      <div>
        <strong>City:</strong> {city}
      </div>
      <div>
        <strong>Pincode:</strong> {pincode}
      </div>
      <div>
        <strong>Job:</strong> {job}
      </div>
      <div>
        <strong>Address:</strong> {address}
      </div>
      <div>
        <strong>Disease:</strong> {preExistingDisease.join(", ")}
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
  address: state.address,
  preExistingDisease:state.checkbox.preExistingDisease
});

export default connect(mapStateToProps)(TestPage);
