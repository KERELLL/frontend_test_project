import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchStreams} from "./streams.streamAction";
import {getList} from "./streams.streamSelector";
import {getIsSignedIn, getUserId} from "./streams.selector";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const StreamList: React.FC = () => {

    const currentUserId = useSelector(getUserId)
    const isSignedIn = useSelector(getIsSignedIn)
    const renderCreate = () => {
        if(isSignedIn){
            return <Link to={"/streams/new"} className={"ui button primary"}>
                Create Stream
            </Link>
        }
    }

    const renderAdmin = (stream : any) => {
        if(stream.userId === currentUserId){
            return <div className={"right floated content"}>
                <Link to={"streams/edit/" + stream.id} className={"ui button primary"}>
                    Edit
                </Link>
                <button className={"ui button negative"}>
                    Delete
                </button>
            </div>
        }
    }

    const rendered = () =>{
        return streamsList.map(stream => {
            return (
                <div className={"item"} key = {stream.id}>
                        <div className={"content"}>
                            {stream.title}
                            <div className={"description"}>{stream.description}</div>
                        </div>
                    {renderAdmin(stream)}
                </div>
            )
        })
    }

    const dispatch = useDispatch()
    const streamsList = useSelector(getList)

    useEffect(() => {
        dispatch(fetchStreams())
    }, [])


    return <div>
        <div className={"ui celled list"}>
            {rendered()}
            {renderCreate()}
        </div>
    </div>
}

export default StreamList;