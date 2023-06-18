import React, { useContext } from "react";
import { signInWithGoogle } from "../services/firebase";
import { UserContext } from "../providers/UserProvider";
import google from "../images/google.png"
import { logOut } from "../services/firebase";
import googleicon from "../images/google.png"
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
    const user = useContext(UserContext);
    const logoutButton = (
        <div className="navbar--login--logout">
            <button className="logout-button" onClick={logOut}>
                <img
                    src={user ? user.photoURL : ""}
                    alt="google icon"
                />
                <p className="logouttext">Logout</p>
            </button>
        </div>
    )

    const userInfo = (
        <div className='navbar--login--info'>
            <img src={google} />
            <div className='navbar--login--info--name'>
                <p>{user && user.displayName}</p>
            </div>
        </div>
    )

    const loginButton = (
        <div className="login--button">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src={googleicon} alt="google icon" />
                <span>Sign in</span>
            </button>
        </div>
    )

    return (
        <nav className='navbar--main'>
            <Link to='/'>
                <div className='navbar--logo'>
                    <div className='navbar--logo--img'>
                        <img src="https://res.cloudinary.com/dwsverefw/image/upload/v1671733197/media%20council/milan_logo_og_rxtdnj.png" />
                    </div>
                    <div className='navbar--logo--text'>
                        <h3>MILAN</h3>
                    </div>
                </div>
            </Link>
            <div className='navbar--links'>
                <NavLink to='/' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "pending"}><p>Home</p><div className="show"></div></NavLink>
                <NavLink to='/gallery' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "pending"}><p>Gallery</p><div className="show"></div></NavLink>
                <NavLink to='/team' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "pending"}><p>Team</p><div className="show"></div></NavLink>
                <NavLink to='/register' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "pending"}><p>Register</p><div className="show"></div></NavLink>
            </div>
            {user ? logoutButton : loginButton}
        </nav >
    )
}