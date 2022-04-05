import React from 'react';
import {View} from 'react-native'

function App() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <View>
      <button onClick={refreshPage}>Click to reload!</button>
    </View>
  );
}

export default App;