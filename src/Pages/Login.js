import React from 'react';
import { connect } from 'react-redux';


import { setUserLogin, submitUserLogin, verifyFields } from '../Action/userActions';

const InputFields = (props) => {
  return(
    <tr>
      <td>{props.title} : </td>
      <td>
          <input type="text" name={props.name} onChange={(e) => props.action(e.target.name, e.target.value)}></input>
          <span className="error">{props.errordata[props.name]}</span>
      </td>
    </tr>
  )
}

const Login = ({ userDetail ,setUserLogin,submitUserLogin }) => {
  let errordata = userDetail.errordata;
  return (
    <div className="App">
        <table>
          <tbody>
          <InputFields errordata={errordata} action={setUserLogin} title="Mobile" name="mobileForLogin" />
          "OR"
          <InputFields errordata={errordata} action={setUserLogin} title="Email" name="emailForLogin" />
          <InputFields errordata={errordata} action={setUserLogin} title="Password" name="passwordForLogin" />
        
          <tr><td></td><td><button className="submit" onClick={(e)=> submitUserLogin()} > Login </button></td></tr>
          </tbody>
        </table>

      
    </div>
  );
}

const mapStateToProps = state => ({
  userDetail : state.userReducer
})

export default connect(mapStateToProps, { setUserLogin, submitUserLogin })(Login);
