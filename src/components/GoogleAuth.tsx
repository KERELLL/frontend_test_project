import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signIn, signOut} from './streams/streams.actions'
import {Button} from "@mui/material";
import {getIsSignedIn, getUserId} from "./streams/streams.selector";


const GoogleAuth: React.FC = () => {
    const dispatch = useDispatch()
    const isSignedIn = useSelector(getIsSignedIn)
    const userId = useSelector(getUserId)
    console.log(isSignedIn)

    const handleSignInClick = () => {
        const userIdRandom = Math.round(Math.random() * 1000)
        dispatch(signIn(userIdRandom))
    }

    const handleSignOutClick = () => {
        dispatch(signOut())
    }

    return <div>
        {isSignedIn
            ?
            <Button onClick={handleSignOutClick} variant={"contained"}>Sign out</Button>
            : <Button onClick={handleSignInClick} variant={"contained"}>Sign in</Button>
        }
    </div>
}

export default GoogleAuth;