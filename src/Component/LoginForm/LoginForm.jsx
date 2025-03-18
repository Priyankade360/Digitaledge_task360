// import React from "react";
// import "./LoginForm.scss";
// import Logo from "../../assets/360logo.svg";
// import Frame from "../../assets/Frame.png";
// import google from "../../assets/google.svg";
// import microsoft from "../../assets/microsoft-icon.svg";
// import appstore from "../../assets/apple-app-store.svg";

// const LoginForm = ({ onLogin }) => {
//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <img src={Logo} alt=" " className="login-logo" />
//         <h2>Welcome Back</h2>
//         <p>Welcome back! Please enter your details</p>
//         <form
//           className="login-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//             onLogin();
//           }}
//         >
//           <label>Email</label>
//           <input type="email" placeholder="example@businessdomain.com" />
//           <button type="submit">Sign In</button>
//           <div className="separator">---- or sign in with ----</div>
//           <div className="social-icons">
//             <img src={google} alt=" " />
//             <img src={microsoft} alt=" " />
//             <img src={appstore} alt=" " />
//           </div>
//         </form>
//       </div>

//       <div className="login-right">
//         <img src={Frame} alt=" " className="login-image" />
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";
import Logo from "../../assets/360logo.svg";
import Frame from "../../assets/Frame.png";
import google from "../../assets/google.svg";
import microsoft from "../../assets/microsoft-icon.svg";
import appstore from "../../assets/apple-app-store.svg";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/navbar");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Logo} alt="Company Logo" className="login-logo" />
        <h2>Welcome Back</h2>
        <p>Welcome back! Please enter your details</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="example@businessdomain.com"
          />
          <button type="submit">Sign In</button>
          <div className="separator">---- or sign in with ----</div>
          <div className="social-icons">
            <img src={google} alt="Sign in with Google" />
            <img src={microsoft} alt="Sign in with Microsoft" />
            <img src={appstore} alt="Sign in with Apple" />
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src={Frame} alt="Illustration" className="login-image" />
      </div>
    </div>
  );
};

export default LoginForm;
