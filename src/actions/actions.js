

// exporting action types since need to use same string in reducers
export const SET_FULL_NAME = "SET_FULL_NAME";
export const SET_DOB = "SET_DOB";
export const SET_MOBILE = "SET_MOBILE";
export const SET_EMAIL = "SET_EMAIL";
export const SET_SALUTATION = "SET_SALUTATION";
export const SET_WEIGHT = "SET_WEIGHT";
export const SET_FEET = "SET_FEET";
export const SET_INCH = "SET_INCH";
export const SET_CITY = "SET_CITY";
export const SET_PINCODE = "SET_PINCODE";
export const SET_JOB = "SET_JOB";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_PRE_EXISTING_DISEASE = "SET_PRE_EXISTING_DISEASE"

// Action creators
export const setFullName = (fullName) => ({
  type: SET_FULL_NAME,
  payload: fullName,
});

export const setJob = (job) => ({
  type: SET_JOB,
  payload: job,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setDob = (dob) => ({
  type: SET_DOB,
  payload: dob,
});

export const setMobile = (mobile) => ({
  type: SET_MOBILE,
  payload: mobile,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setSalutation = (salutation) => ({
  type: SET_SALUTATION,
  payload: salutation,
});

export const setWeight = (weight) => ({
  type: SET_WEIGHT,
  payload: weight,
});

export const setFeet = (feet) => ({
  type: SET_FEET,
  payload: feet,
});

export const setInch = (inch) => ({
  type: SET_INCH,
  payload: inch,
});

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setPincode = (pincode) => ({
  type: SET_PINCODE,
  payload: pincode,
});

export const setPreExistingDisease = (disease) => ({
  type: SET_PRE_EXISTING_DISEASE,
  payload: disease,
});