import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

import { listLogEntries } from './API';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  // Calls to the backend server when the component loads
  // [] = empty dependency array = we only want to run this function once when the 
  // component loads
  useEffect(() => {
    // useEffect cannot be made async => create an async anonymous function 
    (async() => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries);
      console.log(logEntries);
    })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/jelleb1/ckjfu2z5cnjyg19rpafajn4ic"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {
        logEntries.map(entry => (
          <Marker 
            key={entry._id}
            latitude={entry.latitude} 
            longitude={entry.longitude} 
          >
            <img className="marker" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png" alt=""></img>
        </Marker>
        ))
      }

      <Popup
        latitude={37.78}
        longitude={-122.41}
        closeButton={true}
        closeOnClick={false}
        onClose={() => this.setState({showPopup: false})}
        anchor="top" >
        <div>You are here</div>
      </Popup>
    </ReactMapGL>
  );
}

export default App;