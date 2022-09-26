import axios from 'axios';

export const getUserLogin = ({ email, password }) => {
    return axios.post("http://localhost:3001/api/v1/user/login", { email, password, })
    .catch((err) => console.log(err))
}

export const getUserProfile = ({ token }) => {
    const config = { 
        headers: { Authorization : `Bearer` + token },
    }
    const bodyParams = {
        key: 'value',
    }
    return axios.post("http://localhost:3001/api/v1/user/profile", bodyParams, config)
                .then((res) => {
                    return {
                        firstName: res.data?.body.firstName,
                        lastName: res.data?.body.lastName,
                    }
                })
                .catch((err) => console.log(err))
}

export const updateUserProfile = ({ token, firstName, lastName }) => {
    const config = { 
        headers: { Authorization : `Bearer ${token}` },
    }

    const data = {
        firstName: firstName,
        lastName: lastName,
    }

    return axios.put("http://localhost:3001/api/v1/user/profile", data, config)
                .then((req) => console.log(req))
                .catch((err) => console.log(err))
}
