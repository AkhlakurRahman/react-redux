import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'T.N.T', duration: 3.5 },
    { title: 'Scientist', duration: 4.2 }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
