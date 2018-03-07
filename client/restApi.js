import {BASE_URL} from './constants'

/**
 * Restcall to endpoint for creating user. Done with fetch. Returns a promise.
 */
export const createNewUser = (user) => 
  fetch(`${BASE_URL}/users`, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    method: 'POST'
})

/**
 * Restcall to endpoint for fetching all users. GET is default when method is not specified.
*/
export const getAllUsers = () => fetch(`${BASE_URL}/users`)
