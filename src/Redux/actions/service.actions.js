import digitalServices from '../../service/digitalServices';

export const digitalServicesTypes = {
  GET_DIGITAL_SERVICES: '[SERVICES] GET_DIGITAL_SERVICES',
  REQUEST_DIGITAL_SERVICES: '[SERVICES] REQUEST_DIGITAL_SERVICES',
  SUCCESS_DIGITAL_SERVICES: '[SERVICES] SUCCESS_DIGITAL_SERVICES',
  FAILURE_DIGITAL_SERVICES: '[SERVICES] FAILURE_DIGITAL_SERVICES',
};

/**
 * Digital Services
 */

// export const getDigitalServices = () => ({
//   type: digitalServicesTypes.GET_DIGITAL_SERVICES,
// });

export const digitalServicesRequest = () => ({
  type: digitalServicesTypes.REQUEST_DIGITAL_SERVICES,
});

export const digitalServicesFailure = (error) => ({
  type: digitalServicesTypes.FAILURE_DIGITAL_SERVICES,
  payload: error,
});

export const digitalServicesSuccess = (response) => ({
  type: digitalServicesTypes.SUCCESS_DIGITAL_SERVICES,
  payload: response,
});

/**
 *     INFORMATION:
 * Get equipment
 * @returns
 */
export const getDigitalServices = () => {
  return (dispatch) => {
    dispatch(digitalServicesRequest());

    const onSuccess = (response) => {
      dispatch(digitalServicesSuccess(response));
      return response;
    };
    const onFailure = (error) => {
      dispatch(digitalServicesFailure(error));
      return error;
    };

    try {
      digitalServices().then((data) => {
        console.log(data);
        onSuccess(data);
      });
    } catch (error) {
      onFailure(error);
    }
  };
};
