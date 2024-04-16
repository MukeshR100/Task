import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import RootStack from './src/navigation/RootStack';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  );
}

export default App;
