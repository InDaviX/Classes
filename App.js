import React from 'react';
import {SafeAreaView} from 'react-native';
import MyText from './components/MyText/MyText';
const App = () => {
  return (
    <SafeAreaView>
      <MyText name={'Dawid'} />
    </SafeAreaView>
  );
};
export default App;
