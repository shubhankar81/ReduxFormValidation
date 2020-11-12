import React from 'react';
import { connect } from 'react-redux';
import { setUserDetail, submitUserDetail, verifyFields } from "./Action/userActions";

const InputFields = (props) => {
  return(
    <tr>
      <td>{props.title} : </td>
      <td>
          <input name={props.name} onChange={(e) => props.action(e.target.name, e.target.value)}></input>
           {/* <span className="error">{props.data.error}</span>  */}
      </td>
    </tr>
  )
}

const App = ({ userDetail ,setUserDetail,submitUserDetail }) => {
  return (
    <div className="App">
        <table>
          <tbody>
          <InputFields data={userDetail} action={setUserDetail} title="Name" name="username" />
          <InputFields data={userDetail} action={setUserDetail} title="Mobile" name="mobile" />
          <InputFields data={userDetail} action={setUserDetail} title="Email" name="email" />
          <InputFields data={userDetail} action={setUserDetail} title="Password" name="password" />
          <InputFields data={userDetail} action={setUserDetail} title="New Password" name="newpassword" />
        
          <tr><td></td><td><button onClick={(e)=> submitUserDetail()} > Register </button></td></tr>
          </tbody>
        </table>

      
    </div>
  );
}

const mapStateToProps = state => ({
  userDetail : state.userReducer
})

export default connect(null, { mapStateToProps, setUserDetail, submitUserDetail })(App);
