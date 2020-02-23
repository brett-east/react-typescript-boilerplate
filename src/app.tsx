import React from 'react';

import { Hello } from './components/hello';
import AddCount from './components/addCount';

const App = () => (
  <div>
    <Hello firstName="john" lastName="smith" />
    <AddCount />
  </div>
);

export default App;
