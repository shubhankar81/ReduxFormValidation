
import { movieFetched } from "../ApiRequest/app";
export const REGISTER_USER = "SUBMIT_USER_DATA";
export const LOGIN_USER = "USER_LOGIN";
export const setUserDetail = (name, value) => dispatch => {
    dispatch({
        type : "ADD_DETAIL",
        payload : { name , value }
    })
}
export const setSearch = (value) => dispatch => {
    dispatch({
        type : "SET_SEARCH",
        payload : { value }
    })
}
export const submitSearch = (title) => dispatch => {
    movieFetched(title).then(res => {
        dispatch({
            type : "FETCH_MOVIE",
            payload : { res }
        }) 
     })
}

export const submitUserDetail = () => dispatch => {
    dispatch({
        type : REGISTER_USER
    })
}
export const setUserLogin = (name, value) => dispatch => {
    dispatch({
        type : "ADD_LOGIN",
        payload : { name , value }
    })
}

export const submitUserLogin = () => dispatch => {
    dispatch({
        type : LOGIN_USER
    })
}

export const verifyFields = (name, value) => dispatch => {
    dispatch({
        type : "VERIFY_FIELDS"
    })
}