# ReduxFormValidation
a simple registration and login form , with movie list as home page design with redux basic architecture


#userReducer looks like

import { LOGIN_USER,REGISTER_USER  } from '../Action/userActions';
import { submitUserData, loginuserData, movieFetched } from "../ApiRequest/app";
import { Redirect, Router } from "react-router-dom"
import { stat } from 'fs';
const initialState =
    {
        formdata : {
            "username":"",
            "mobile":"",
            "email":"",
            "password" : "",
            "newpassword":""
        },
        loginData : {
            "mobileForLogin":"",
            "emailForLogin":"",
            "passwordForLogin" : "",
        },
        errordata : {},
        errorRegisterData : {},
        submitFlag : true,
        loginFlag : false,
        message : "",
        movieTitle : "FAST",
        movieList : {}
    }

export default  function(state = initialState, action){
     let { formdata, errordata, errorRegisterData, submitFlag, loginData, loginFlag, message, movieList, movieTitle }  = state;
    switch(action.type){
        case "ADD_DETAIL" :
    //        let formdata = state.formdata;
            formdata[action.payload.name] = action.payload.value;
            state = {...state, formdata}
            break;
        case "ADD_LOGIN" :
      //      let loginData = state.loginData;
            loginData[action.payload.name] = action.payload.value;
            break;
        case "FETCH_MOVIE" : 
            movieList = action.payload.res
            state={...state, movieList}
            break;
        case "SET_SEARCH" : 
            movieTitle = action.payload.value;
            state = { ...state, movieTitle}
            break;
        case REGISTER_USER :
            Object.keys(formdata).map(_detail => {
                let error="";
                switch(_detail){
                    case "username" : 
                        error = formdata[_detail] == "" || !formdata[_detail].match(/^[a-zA-Z _]+$/) ? "Allowed Alphabets Only" : "";
                        break;
                    case "mobile" : 
                        error = formdata[_detail] == "" || !formdata[_detail].match(/^[0-9]+$/) || formdata[_detail].length != 10  ? "Please Enter Valid Phone No(Only No. Allowed to 10 digit)" : ""
                        break;
                    case "email" : 
                        error = formdata[_detail] == "" || !formdata[_detail].match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? "Please Enter Valid Mail" :"";
                        break;
                    case "password" :
                        error = formdata[_detail] == "" ? "Please Enter Your Password" : "";
                        break;
                    case "newpassword" :
                        error = formdata[_detail] == "" || formdata[_detail] != formdata["password"]  ? "Password should be same" :"";
                        break;
                }
                errorRegisterData[_detail] = error;
            })
            Object.keys(errorRegisterData).map(_R => {
                if(errorRegisterData[_R] != ""){
                    submitFlag = false;
                }
            })
            console.log(submitFlag)
            if(submitFlag){
                console.log("submitflag ", submitFlag)
                alert("register successfully")
                 formdata = {
                    "username":"",
                    "mobile":"",
                    "email":"",
                    "password" : "",
                    "newpassword":""
                 } 
                //window.location.replace("/movie")
            //     var postData = {
            //         method : "POST",
            //         headers : {'Content-Type' : 'application/json'},
            //         body : JSON.stringify(formdata)
            //     }
            //    var response =  submitUserData(postData)
            //    message = response.result;
            }
            state = { ...state, formdata, errordata}
            break;

            case LOGIN_USER :
                Object.keys(loginData).map(_detail => {
                    let error="",mobileorlogin=false;
                    if(_detail == "mobileForLogin"){
                        error = loginData[_detail] == "" || !loginData[_detail].match(/^[0-9]+$/) || loginData[_detail].length != 10  ? "Please Enter Valid Phone No(Only No. Allowed to 10 digit)" : ""
                        errordata[_detail] = error;

                    }else if( _detail == "emailForLogin" || _detail == "passwordForLogin"){
                        switch(_detail){
                            case "emailForLogin" : 
                                error =  loginData[_detail] == "" || !loginData[_detail].match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? "Please Enter Valid Mail" :"";
                                break;
                            case "passwordForLogin" :
                                error = loginData[_detail] == "" ? "Please Enter Your Password" : "";
                                break;
                        }
                        errordata[_detail] = error;
                    }
                })
                
                if(errordata.mobileForLogin == "" || (errordata.emailForLogin == "" && errordata.passwordForLogin == "" )){
                    loginFlag = true;
                }
            
                if(loginFlag){
                    alert("Login Successful")
                    window.location.replace("/movie")
                //     var postData = {
                //         method : "POST",
                //         headers : {'Content-Type' : 'application/json'},
                //         body : JSON.stringify(loginData)
                //     }
                //    var response =  loginuserData(postData)
                //    message = response.result;
                //    if(message == "success"){
                //        window.location.replace("/movie")
                //    }
                }else{
                    alert("not Success")
                }
                state={...state, errordata, loginData}
                break;
    }
    return state;
    
}
