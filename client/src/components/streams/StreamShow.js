import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import flvjs from 'flv.js';
import { fetchStream } from '../../actions';
const StreamShow = (props) => {
    const videoRef = useRef();
    const id = props.match.params.id;
    const stream = useSelector((state) => {
        return state.streams[id]
    });
    const dispatch = useDispatch();
    useEffect(() => {
        if (!stream) dispatch(fetchStream(id));
    }, [dispatch, id, stream]);

    useEffect(() => {
        if (!stream) return;
        const flvPlayer = flvjs.createPlayer({
            type: "flv",
            url: `http://localhost:8000/live/${id}.flv`
        });
        flvPlayer.attachMediaElement(videoRef.current);
        flvPlayer.load();
        return () => {
            flvPlayer.destroy();
        };
    }, [stream, id]);


    if (!stream) return <div>Loading !</div>;
    return (
        <div className='item'>
            <video controls ref={videoRef} style={{ width: "100%" }}></video>
            <h2> {stream.title} </h2>
            <h5> {stream.description} </h5>
        </div>
    );
}

export default StreamShow;