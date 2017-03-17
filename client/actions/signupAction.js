import axios from 'axios';

// thunk
export function signupRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}