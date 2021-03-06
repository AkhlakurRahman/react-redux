import React from 'react';

import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

function App() {
  return (
    <div className='ui container grid' style={{ marginTop: 20 }}>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column four wide'>
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
