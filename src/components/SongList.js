import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component {
  render() {
    const songs = this.props.songs.map(song => {
      return <div>{song.title}</div>;
    });

    return <div>
      {songs}
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapStateToProps)(SongList);