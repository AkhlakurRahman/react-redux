import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  if (!song) {
    return <h3>Select a song</h3>;
  }
  return (
    <div>
      <h3>Song Details</h3>
      <p>{song.title}</p>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetails);
