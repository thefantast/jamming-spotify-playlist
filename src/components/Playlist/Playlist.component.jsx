import React from 'react';

import './Playlist.css';
import Tracklist from '../TrackList/TrackList.component.jsx';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value="New Playlist"/>
                    <Tracklist tracks={this.props.playlistTrack} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;