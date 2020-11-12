import React from 'react';
import { connect } from 'react-redux';
import { setUserDetail, submitUserDetail, verifyFields } from '../Action/userActions';
import { withRouter} from 'react-router-dom'

const InputFields = (props) => {
  return(
    <tr>
      <td>{props.title} : </td>
      <td>
          <input type="text" value={props.fieldValue[props.name]} name={props.name} onChange={(e) => props.action(e.target.name, e.target.value)}></input>
         <span className="error">{props.errordata[props.name]}</span>
      </td>
    </tr>
  )
}

const Register = ({userDetail, setUserDetail,submitUserDetail }) => {
    let errordata = userDetail.errorRegisterData;
    let formdata = userDetail.formdata
  return (
    <div className="App">
        <table>
          <tbody>
          <InputFields fieldValue={formdata} errordata={errordata} action={setUserDetail} title="Name" name="username" />
          <InputFields fieldValue={formdata} errordata={errordata} action={setUserDetail} title="Mobile" name="mobile" />
          <InputFields fieldValue={formdata} errordata={errordata} action={setUserDetail} title="Email" name="email" />
          <InputFields fieldValue={formdata} errordata={errordata} action={setUserDetail} title="Password" name="password" />
          <InputFields fieldValue={formdata} errordata={errordata} action={setUserDetail} title="New Password" name="newpassword" />
          <tr><td></td><td><button className="submit" onClick={(e)=> submitUserDetail()} > Register </button></td></tr>
          </tbody>
          <tfoot>
              <span className="success"> {userDetail.message} </span>
          </tfoot> 
        </table>
    </div>
  );
}
const mapStateToProps = state => ({
    userDetail : state.userReducer,
})
export default withRouter(connect(mapStateToProps, { setUserDetail, submitUserDetail })(Register));
