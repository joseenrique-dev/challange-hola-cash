import { digitalServicesTypes } from '../actions/service.actions';

const initialState = {
  services: [],
  isFetching: false,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case digitalServicesTypes.GET_DIGITAL_SERVICES:
      return {
        ...state,
      };
    case digitalServicesTypes.SUCCESS_DIGITAL_SERVICES:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case digitalServicesTypes.REQUEST_DIGITAL_SERVICES:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return { ...state };
  }
};

export default serviceReducer;
