import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase"

export const UserContext = createContext({ user: null })

export default (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email , photoURL} = user;
                setUser({
                    displayName,
                    email,
                    photoURL
                })
            }
            else {
                setUser(null)
            }
        })
    }, [user])
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}