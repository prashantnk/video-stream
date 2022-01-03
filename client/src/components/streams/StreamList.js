import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    renderAdminButton(stream) {
        if (stream.userId !== this.props.currId) return null;
        return (
            <div className='right floated content'>
                <Link to={`/streams/edit/${stream.id}`} className='ui primary button'>Edit</Link>
                <Link to={`/streams/delete/${stream.id}`} className='ui negative button'>Delete</Link>
            </div>
        );
    }
    renderStreamCreateButton() {
        if (!this.props.isSignedIn) return null;
        return (
            <Link to="/streams/new">
                <div className='ui right floated button'>Create Stream</div>
            </Link>
        );
    }
    renderList = () => {
        if (!this.props.streams) return null;
        const renderedList = this.props.streams.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdminButton(stream)}
                    <i className='play icon large middle aligned' />
                    <div className='content'>
                        <div className='ui header'>{stream.title}</div>
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                </div>

            );
        });
        return renderedList;
    }
    render() {
        return (
            <div>
                <h2> Streams : </h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.renderStreamCreateButton()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);