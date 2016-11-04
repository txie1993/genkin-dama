import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const postToImgur = () => {
  var formData = new FormData();
  formData.append("image", $("[name='uploads[]']")[0].files[0]);
  $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    datatype: "json",
    headers: {
      "Authorization": "Client-ID YOUR-CLIEND-ID-GOES-HERE"
    },
    data: formData,
    success: (response) => {
      console.log(response);
      const photo = response.data.link;
    },
    cache: false,
    contentType: false,
    processData: false
  });
};


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
