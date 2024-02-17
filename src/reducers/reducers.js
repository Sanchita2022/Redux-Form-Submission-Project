

import { combineReducers } from "redux";
import {
  SET_FULL_NAME,
  SET_DOB,
  SET_MOBILE,
  SET_EMAIL,
  SET_SALUTATION,
  SET_WEIGHT,
  SET_FEET,
  SET_INCH,
  SET_CITY,
  SET_PINCODE,
  SET_JOB,
  SET_ADDRESS,
  SET_PRE_EXISTING_DISEASE
} from "../actions/actions";

const fullNameReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FULL_NAME:
      return action.payload;
    default:
      return state;
  }
};

const jobReducer = (state = "", action) => {
  switch (action.type) {
    case SET_JOB:
      return action.payload;
    default:
      return state;
  }
};

const addressReducer = (state = "", action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};

const dobReducer = (state = "", action) => {
  switch (action.type) {
    case SET_DOB:
      return action.payload;
    default:
      return state;
  }
};

const mobileReducer = (state = "", action) => {
  switch (action.type) {
    case SET_MOBILE:
      return action.payload;
    default:
      return state;
  }
};

const emailReducer = (state = "", action) => {
  switch (action.type) {
    case SET_EMAIL:
      return action.payload;
    default:
      return state;
  }
};

const salutationReducer = (state = "", action) => {
  switch (action.type) {
    case SET_SALUTATION:
      return action.payload;
    default:
      return state;
  }
};

const weightReducer = (state = "", action) => {
  switch (action.type) {
    case SET_WEIGHT:
      return action.payload;
    default:
      return state;
  }
};

const feetReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FEET:
      return action.payload;
    default:
      return state;
  }
};

const inchReducer = (state = "", action) => {
  switch (action.type) {
    case SET_INCH:
      return action.payload;
    default:
      return state;
  }
};

const cityReducer = (state = "", action) => {
  switch (action.type) {
    case SET_CITY:
      return action.payload;
    default:
      return state;
  }
};

const pincodeReducer = (state = "", action) => {
  switch (action.type) {
    case SET_PINCODE:
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  preExistingDisease: [],
};

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRE_EXISTING_DISEASE':
      return {
        ...state,
        preExistingDisease: action.payload,
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  fullName: fullNameReducer,
  dob: dobReducer,
  mobile: mobileReducer,
  email: emailReducer,
  salutation: salutationReducer,
  weight: weightReducer,
  feet: feetReducer,
  inch: inchReducer,
  city: cityReducer,
  pincode: pincodeReducer,
  job: jobReducer,
  address: addressReducer,
  checkbox:checkboxReducer,
});

export default rootReducer;
