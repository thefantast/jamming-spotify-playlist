
import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.component.jsx';
import SearchResults from '../SearchResults/SearchResults.component.jsx';
import Playlist from '../Playlist/Playlist.component.jsx';

import Spotify from '../../util/spotify.js';
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchResults: [
        {
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 1
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 2
      },
      {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: 3
      },
    
    ],
    playlistName: 'My playlist',

    playlistTracks: [ {
      name: 'Playlistname1',
      artist: 'Playlistartist1',
      album: 'Playlistalbum1',
      id: 4
    },
    {
      name: 'Playlistname2',
      artist: 'Playlistartist2',
      album: 'Playlistalbum2',
      id: 5
    },
    {
      name: 'Playlistname3',
      artist: 'Playlistartist3',
      album: 'Playlistalbum3',
      id: 6
    }]
    };

    //bind the functions to use in render method
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this)
  }

  // add Track to the Playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})

  }
  // remove Track to the Playlist
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  //update the Playlistname when you give it your own name.
  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlayList() {
    alert('this method is linked to the button')
    const trackUris = this.state.playlistTracks.map(track => track.uri)
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          
            <SearchBar onSearch={this.search} /> 
          <div className="App-playlist">
          
            <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
            
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlayList}
                      />

          </div>
       </div>
      </div>
    )
  }
}

export default App;
