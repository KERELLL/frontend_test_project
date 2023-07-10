import React, {useEffect} from "react";
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./streams.streamSelector";
import {toInteger} from "lodash";
import {fetchStream} from "./streams.streamAction";



const StreamEdit: React.FC = () => {
    const dispatch = useDispatch()
    const {id} = useParams<{id: string}>()
    const streamId = toInteger(id)
    useEffect(() => {
        dispatch(fetchStream(streamId))
    }, [])
    const streamsList = useSelector(getList)
    return <div>
    </div>
}

export default StreamEdit;