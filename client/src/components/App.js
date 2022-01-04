import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { getGapiInstance } from '../actions';
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGapiInstance());
    }, [dispatch])
    return (
        <div className='ui container'>
            <Header />
            <Switch>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path={"/streams/edit/:id"} component={StreamEdit} />
                <Route path="/Streams/delete/:id" component={StreamDelete} />
                <Route path="/streams/show" component={StreamShow} />
                <Route>
                    <div>No Match</div>
                </Route>
            </Switch>
        </div >
    );
}
export default App;