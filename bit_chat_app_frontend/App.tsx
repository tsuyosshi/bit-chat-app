/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { RecoilRoot } from 'recoil';

import Provider from './src/providers/Provider';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <Provider />
    </RecoilRoot>
  );
}

export default App;
