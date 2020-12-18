import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
  console.log(props);
  return (
    <div>
      {props.song != null ? props.song.title : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}
export default connect(mapStateToProps)(SongDetail);