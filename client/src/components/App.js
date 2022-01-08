import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import MyStreams from './streams/MyStreams';
import Header from './Header';
const App = () => {
    return (
        <div className='ui container'>
            <Header />
            <Switch>
                <Route path={"/"} exact component={StreamList} />
                <Route path={"/streams/new"} component={StreamCreate} />
                <Route path={"/streams/edit/:id"} component={StreamEdit} />
                <Route path={"/Streams/delete/:id"} component={StreamDelete} />
                <Route path={"/streams/my"} component={MyStreams} />
                <Route path={"/streams/:id"} component={StreamShow} />
                <Route>
                    <div>No Match</div>
                </Route>
            </Switch>
        </div >
    );
}
export default App;