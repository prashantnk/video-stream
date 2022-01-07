import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStream } from '../../actions';
const StreamShow = (props) => {
    const id = props.match.params.id;
    const stream = useSelector((state) => state.streams[id]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStream(id));
    }, [dispatch, id]);


    if (!stream) return <div>Loading !</div>;
    return (
        <div className='item'>
            <h2> {stream.title} </h2>
            <h5> {stream.description} </h5>
        </div>
    );
}

export default StreamShow;