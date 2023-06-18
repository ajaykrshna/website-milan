import React, { useContext, useState, useEffect } from "react";
import { signInWithGoogle } from "../services/firebase";
import { UserContext } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import googleicon from "../images/google.png"


export default function Login() {
  const user = useContext(UserContext)

  const navigate = useNavigate();

  const [redirect, setRedirect] = useState(null)

  useEffect(() => {
    if (user) {
      setRedirect("/dashboard")
    }
  }, [user])

  if (redirect) {
    navigate(redirect)
  }


  return (
    <div className="login-page">
      <div className="login-page--box">
        <div className="login--image">
          <img src="https://res.cloudinary.com/dwsverefw/image/upload/v1671733197/media%20council/milan_logo_og_rxtdnj.png" />
        </div>
        <div className="login--form">
          <div className="login--info">
            <h4 className="login--info--text">Sign into Milan</h4>
          </div>
          <div className="login--button">
            <button className="login-provider-button" onClick={signInWithGoogle}>
              <img src={googleicon} alt="google icon" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}