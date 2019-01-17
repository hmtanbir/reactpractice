import { apiClient } from './'
const url = '/customers';


export function fetchCustomers() {
  return dispatch => {
    dispatch({
      type: 'FETCH_CUSTOMERS',
      payload: apiClient.get(url)
    });
  }
}